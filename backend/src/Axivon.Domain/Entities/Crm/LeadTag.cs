using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class LeadTag : BaseEntity
{
    public Guid LeadId { get; set; }
    public Lead? Lead { get; set; }
    public string TagName { get; set; } = string.Empty;
}
