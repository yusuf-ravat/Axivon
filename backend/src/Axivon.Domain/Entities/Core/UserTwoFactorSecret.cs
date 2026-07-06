using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Core;

public class UserTwoFactorSecret : BaseEntity
{
    public Guid UserId { get; set; }
    public User? User { get; set; }
    public string TwoFactorSecret { get; set; } = string.Empty;
    public bool IsEnabled { get; set; } = true;
}
