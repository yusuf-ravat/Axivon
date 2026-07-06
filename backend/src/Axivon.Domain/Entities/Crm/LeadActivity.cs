using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class LeadActivity : BaseEntity
{
    public Guid LeadId { get; set; }
    public string Description { get; set; } = string.Empty;
}
