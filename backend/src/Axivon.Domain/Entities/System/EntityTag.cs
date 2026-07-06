using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class EntityTag : BaseEntity
{
    public Guid TagId { get; set; }
    public Tag? Tag { get; set; }
    public Guid EntityId { get; set; }
    public string EntityType { get; set; } = string.Empty; // Lead, Contact, Company, etc.
}
