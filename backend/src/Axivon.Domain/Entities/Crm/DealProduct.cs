using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class DealProduct : BaseEntity
{
    public Guid DealId { get; set; }
    public Deal? Deal { get; set; }
    public string ProductName { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int Quantity { get; set; }
}
