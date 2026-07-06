FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy all project files to resolve dependencies
COPY ["src/Axivon.API/Axivon.API.csproj", "src/Axivon.API/"]
COPY ["src/Axivon.Application/Axivon.Application.csproj", "src/Axivon.Application/"]
COPY ["src/Axivon.Domain/Axivon.Domain.csproj", "src/Axivon.Domain/"]
COPY ["src/Axivon.Infrastructure/Axivon.Infrastructure.csproj", "src/Axivon.Infrastructure/"]
COPY ["src/Axivon.Persistence/Axivon.Persistence.csproj", "src/Axivon.Persistence/"]
COPY ["src/Axivon.Shared/Axivon.Shared.csproj", "src/Axivon.Shared/"]

RUN dotnet restore "src/Axivon.API/Axivon.API.csproj"

# Copy the rest of the source code
COPY . .
WORKDIR "/src/src/Axivon.API"
RUN dotnet build "Axivon.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Axivon.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000
ENTRYPOINT ["dotnet", "Axivon.API.dll"]
