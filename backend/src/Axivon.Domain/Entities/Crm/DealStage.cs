using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Crm;

public class DealStage : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public Guid PipelineId { get; set; }
    public Pipeline? Pipeline { get; set; }
    public int Order { get; set; }
}
