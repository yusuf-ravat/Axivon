using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Communication;

public class CallLog : BaseEntity
{
    public Guid ContactId { get; set; }
    public Contact? Contact { get; set; }
    public int DurationSeconds { get; set; }
    public string Outcome { get; set; } = string.Empty;
    public string Notes { get; set; } = string.Empty;
}
