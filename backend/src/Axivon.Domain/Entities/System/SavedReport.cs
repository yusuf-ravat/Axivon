using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class SavedReport : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string QueryConfigurationJson { get; set; } = string.Empty;
}
