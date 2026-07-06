using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Core;

public class Permission : BaseEntity
{
    public string Name { get; set; } = string.Empty;
}
