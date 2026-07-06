using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Tasks;

public class TaskChecklist : BaseEntity
{
    public Guid TaskId { get; set; }
    public TaskItem? TaskItem { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsCompleted { get; set; } = false;
}
