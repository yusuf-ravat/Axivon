using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class LeadAttachment : BaseEntity
{
    public Guid LeadId { get; set; }
    public Lead? Lead { get; set; }
    public string FileName { get; set; } = string.Empty;
    public string FilePath { get; set; } = string.Empty;
}
