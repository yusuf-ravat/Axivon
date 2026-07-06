using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class LoginHistory : BaseEntity
{
    public Guid UserId { get; set; }
    public User? User { get; set; }
    public DateTime LoginTime { get; set; } = DateTime.UtcNow;
    public string IPAddress { get; set; } = string.Empty;
    public string UserAgent { get; set; } = string.Empty;
}
