using Axivon.Application.Interfaces;

namespace Axivon.Infrastructure.Cache;

public class RedisService : ICacheService
{
    public async Task<T?> GetAsync<T>(string key)
    {
        return await Task.FromResult<T?>(default);
    }

    public async Task SetAsync<T>(string key, T value, TimeSpan? expiration = null)
    {
        await Task.CompletedTask;
    }

    public async Task RemoveAsync(string key)
    {
        await Task.CompletedTask;
    }
}
