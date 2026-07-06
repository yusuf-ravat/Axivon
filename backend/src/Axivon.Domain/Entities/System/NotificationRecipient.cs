using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class NotificationRecipient : BaseEntity
{
    public Guid NotificationId { get; set; }
    public Notification? Notification { get; set; }
    public Guid UserId { get; set; }
    public User? User { get; set; }
    public bool IsRead { get; set; } = false;
    public DateTime? ReadAt { get; set; }
}
