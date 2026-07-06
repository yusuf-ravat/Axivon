using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Tasks;

public class TaskComment : BaseEntity
{
    public Guid TaskId { get; set; }
    public TaskItem? TaskItem { get; set; }
    public string CommentText { get; set; } = string.Empty;
    public Guid UserId { get; set; }
    public User? User { get; set; }
}
