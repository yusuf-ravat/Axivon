using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using Axivon.Application.Interfaces;
using Axivon.Persistence.Context;
using Axivon.Persistence.UnitOfWork;
using Axivon.Infrastructure.Email;
using Axivon.Infrastructure.Cache;

namespace Axivon.API;

public class Program
{
    public static void Main(string[] args)
    {
        // 1. Configure Serilog
        Log.Logger = new LoggerConfiguration()
            .WriteTo.Console()
            .CreateLogger();

        try
        {
            Log.Information("Starting Axivon CRM API...");

            var builder = WebApplication.CreateBuilder(args);
            builder.Host.UseSerilog();

            // // 2. Configure SQLite local Database
            // builder.Services.AddDbContext<AxivonDbContext>(options =>
            //     options.UseSqlite("Data Source=axivon.db"));
            
            // builder.Services.AddScoped<IApplicationDbContext>(provider => 
            //     provider.GetRequiredService<AxivonDbContext>());
            
            // 2. Configure SQLite Database (configurable for production)
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
                                   ?? "Data Source=axivon.db";
            builder.Services.AddDbContext<AxivonDbContext>(options =>
                options.UseSqlite(connectionString));




            // 3. Configure JWT Authentication
            var jwtKey = builder.Configuration["Jwt:Key"] ?? "SuperSecretKeySecretKey1234567890!";
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });

            // 4. Configure CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowAnyOrigin();
                });
            });

            // 5. Configure Swagger
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Axivon CRM API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        Array.Empty<string>()
                    }
                });
            });

            builder.Services.AddControllers();

            // 6. Configure Dependency Injection for core layers
            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
            builder.Services.AddScoped<IEmailService, EmailService>();
            builder.Services.AddScoped<ICacheService, RedisService>();

            var app = builder.Build();

            // Automatic Db Seeder/Created validation
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<AxivonDbContext>();
                    context.Database.EnsureCreated();
                    Log.Information("Database successfully initialized and verified.");
                }
                catch (Exception ex)
                {
                    Log.Error(ex, "Failed to initialize the local SQLite database.");
                }
            }

            // Configure HTTP pipeline
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Axivon CRM API v1"));
            }

            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
        catch (Exception ex)
        {
            Log.Fatal(ex, "Host terminated unexpectedly");
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }
}
