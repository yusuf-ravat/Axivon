using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class Activity : BaseEntity
{
    public Guid EntityId { get; set; }
    public string EntityType { get; set; } = string.Empty; // Lead, Contact, Company, Deal
    public string Action { get; set; } = string.Empty; // Lead Created, Deal Updated, etc.
    public string Details { get; set; } = string.Empty;
}
