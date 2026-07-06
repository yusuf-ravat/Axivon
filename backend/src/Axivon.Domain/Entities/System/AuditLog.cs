using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class AuditLog : BaseEntity
{
    public string TableName { get; set; } = string.Empty;
    public string Action { get; set; } = string.Empty;
    public string Details { get; set; } = string.Empty;
}
