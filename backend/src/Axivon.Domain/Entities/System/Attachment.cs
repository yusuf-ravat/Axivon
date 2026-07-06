using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class Attachment : BaseEntity
{
    public string FileName { get; set; } = string.Empty;
    public string FileUrl { get; set; } = string.Empty;
}
