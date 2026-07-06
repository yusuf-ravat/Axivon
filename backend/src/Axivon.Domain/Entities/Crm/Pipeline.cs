using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class Pipeline : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public Guid TenantId { get; set; }
    public Tenant? Tenant { get; set; }
    public ICollection<PipelineStage> Stages { get; set; } = new List<PipelineStage>();
}
