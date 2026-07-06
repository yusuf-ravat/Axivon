using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class DashboardWidget : BaseEntity
{
    public Guid UserId { get; set; }
    public User? User { get; set; }
    public string WidgetType { get; set; } = string.Empty;
    public string ConfigurationJson { get; set; } = string.Empty;
}
