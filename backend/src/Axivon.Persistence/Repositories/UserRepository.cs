using Axivon.Domain.Entities.Core;
using Axivon.Domain.Entities.Crm;
using Axivon.Domain.Entities.Tasks;
using Axivon.Domain.Entities.Communication;
using Axivon.Domain.Entities.System;
using Axivon.Persistence.Context;

namespace Axivon.Persistence.Repositories;

public class UserRepository : GenericRepository<User>
{
    public UserRepository(AxivonDbContext context) : base(context) { }
}
