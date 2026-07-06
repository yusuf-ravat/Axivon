using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Core;

public class Tenant : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Domain { get; set; } = string.Empty;
    public bool IsActive { get; set; } = true;
}
