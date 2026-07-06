using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class Plan : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string BillingCycle { get; set; } = "Monthly"; // Monthly, Annual
}
