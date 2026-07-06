using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class ContactTag : BaseEntity
{
    public Guid ContactId { get; set; }
    public Contact? Contact { get; set; }
    public string TagName { get; set; } = string.Empty;
}
