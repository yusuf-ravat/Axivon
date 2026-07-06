using Axivon.Persistence.Context;

namespace Axivon.Persistence.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    private readonly AxivonDbContext _context;

    public UnitOfWork(AxivonDbContext context)
    {
        _context = context;
    }

    public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await _context.SaveChangesAsync(cancellationToken);
    }

    public void Dispose()
    {
        _context.Dispose();
        GC.SuppressFinalize(this);
    }
}
