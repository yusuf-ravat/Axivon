using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class FileFolder : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public Guid? ParentFolderId { get; set; }
    public FileFolder? ParentFolder { get; set; }
}
