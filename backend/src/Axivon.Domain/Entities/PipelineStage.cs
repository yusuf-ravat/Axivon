using Axivon.Domain.Common;

namespace Axivon.Domain.Entities;

public class PipelineStage : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public int Order { get; set; }
}
