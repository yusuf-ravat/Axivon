using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class Tag : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string ColorHex { get; set; } = string.Empty;
}
