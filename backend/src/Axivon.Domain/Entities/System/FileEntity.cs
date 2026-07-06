using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class FileEntity : BaseEntity
{
    public string FileName { get; set; } = string.Empty;
    public string FilePath { get; set; } = string.Empty;
    public string ContentType { get; set; } = string.Empty;
    public long FileSize { get; set; }
}
