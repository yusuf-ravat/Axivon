using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Tasks;

public class TaskItem : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
}
