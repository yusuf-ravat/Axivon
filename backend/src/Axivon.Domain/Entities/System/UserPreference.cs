using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class UserPreference : BaseEntity
{
    public Guid UserId { get; set; }
    public User? User { get; set; }
    public string PreferenceKey { get; set; } = string.Empty;
    public string PreferenceValue { get; set; } = string.Empty;
}
