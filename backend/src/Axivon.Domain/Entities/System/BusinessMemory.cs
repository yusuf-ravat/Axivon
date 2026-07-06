using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class BusinessMemory : BaseEntity
{
    public string Context { get; set; } = string.Empty;
    public string Key { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
}
