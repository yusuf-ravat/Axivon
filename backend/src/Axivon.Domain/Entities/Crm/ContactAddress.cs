using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class ContactAddress : BaseEntity
{
    public Guid ContactId { get; set; }
    public Contact? Contact { get; set; }
    public string AddressLine1 { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string ZipCode { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
}
