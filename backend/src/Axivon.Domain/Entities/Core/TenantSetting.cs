using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Core;

public class TenantSetting : BaseEntity
{
    public Guid TenantId { get; set; }
    public Tenant? Tenant { get; set; }
    public string Theme { get; set; } = "light";
    public string Timezone { get; set; } = "UTC";
    public string Currency { get; set; } = "USD";
    public string Logo { get; set; } = string.Empty;
    public string BusinessHours { get; set; } = string.Empty;
    public string Language { get; set; } = "en";
}
