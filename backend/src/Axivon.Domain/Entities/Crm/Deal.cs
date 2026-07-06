using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class Deal : BaseEntity
{
    public string Title { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public string Stage { get; set; } = string.Empty;
}
