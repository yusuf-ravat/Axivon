using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class LeadNote : BaseEntity
{
    public Guid LeadId { get; set; }
    public Lead? Lead { get; set; }
    public string NoteText { get; set; } = string.Empty;
}
