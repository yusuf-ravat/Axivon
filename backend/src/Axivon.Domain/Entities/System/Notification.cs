using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class Notification : BaseEntity
{
    public string Message { get; set; } = string.Empty;
    public bool IsRead { get; set; }
}
