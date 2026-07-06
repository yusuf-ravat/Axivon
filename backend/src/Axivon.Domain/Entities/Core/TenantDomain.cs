using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Core;

public class TenantDomain : BaseEntity
{
    public string CustomDomain { get; set; } = string.Empty;
    public Guid TenantId { get; set; }
    public Tenant? Tenant { get; set; }
    public bool IsActive { get; set; } = true;
}
