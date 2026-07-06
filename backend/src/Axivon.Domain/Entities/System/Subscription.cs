using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class Subscription : BaseEntity
{
    public string PlanName { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
