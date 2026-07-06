using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Tasks;

public class Meeting : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
}
