using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Tasks;

public class CalendarEvent : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public DateTime Start { get; set; }
    public DateTime End { get; set; }
}
