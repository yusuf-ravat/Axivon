using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class CompanyAddress : BaseEntity
{
    public Guid CompanyId { get; set; }
    public Company? Company { get; set; }
    public string AddressLine1 { get; set; } = string.Empty;
    public string AddressLine2 { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string ZipCode { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string AddressType { get; set; } = "Billing"; // Billing, Shipping, HQ
}
