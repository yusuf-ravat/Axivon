using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class Note : BaseEntity
{
    public Guid EntityId { get; set; }
    public string EntityType { get; set; } = string.Empty; // Lead, Contact, Company, Deal
    public string Text { get; set; } = string.Empty;
}
