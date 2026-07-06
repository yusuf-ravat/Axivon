using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class DealActivity : BaseEntity
{
    public Guid DealId { get; set; }
    public Deal? Deal { get; set; }
    public string ActivityType { get; set; } = string.Empty;
    public string Details { get; set; } = string.Empty;
}
