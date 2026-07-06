using Microsoft.EntityFrameworkCore;
using Axivon.Persistence.Context;

namespace Axivon.Persistence.Repositories;

public class GenericRepository<T> where T : class
{
    protected readonly AxivonDbContext _context;
    protected readonly DbSet<T> _dbSet;

    public GenericRepository(AxivonDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public async Task<T?> GetByIdAsync(Guid id) => await _dbSet.FindAsync(id);
    public async Task AddAsync(T entity) => await _dbSet.AddAsync(entity);
    public void Update(T entity) => _dbSet.Update(entity);
    public void Delete(T entity) => _dbSet.Remove(entity);
}
