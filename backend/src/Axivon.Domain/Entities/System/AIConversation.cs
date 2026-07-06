using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class AIConversation : BaseEntity
{
    public string MessageHistory { get; set; } = string.Empty;
}
