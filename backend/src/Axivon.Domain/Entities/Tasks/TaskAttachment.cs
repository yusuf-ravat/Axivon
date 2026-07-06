using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Tasks;

public class TaskAttachment : BaseEntity
{
    public Guid TaskId { get; set; }
    public TaskItem? TaskItem { get; set; }
    public string FileName { get; set; } = string.Empty;
    public string FilePath { get; set; } = string.Empty;
}
