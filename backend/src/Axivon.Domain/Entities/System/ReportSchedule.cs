using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.System;

public class ReportSchedule : BaseEntity
{
    public Guid SavedReportId { get; set; }
    public SavedReport? SavedReport { get; set; }
    public string CronExpression { get; set; } = string.Empty;
    public string RecipientsEmails { get; set; } = string.Empty;
}
