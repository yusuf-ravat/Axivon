FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["src/Axivon.API/Axivon.API.csproj", "Axivon.API/"]
RUN dotnet restore "Axivon.API/Axivon.API.csproj"
COPY . .
WORKDIR "/src/Axivon.API"
RUN dotnet build "Axivon.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Axivon.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000
ENTRYPOINT ["dotnet", "Axivon.API.dll"]
