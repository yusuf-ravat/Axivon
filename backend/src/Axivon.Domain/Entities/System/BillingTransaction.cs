using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class BillingTransaction : BaseEntity
{
    public Guid TenantId { get; set; }
    public Tenant? Tenant { get; set; }
    public decimal Amount { get; set; }
    public string TransactionId { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
}
