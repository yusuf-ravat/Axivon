using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class Contact : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}
