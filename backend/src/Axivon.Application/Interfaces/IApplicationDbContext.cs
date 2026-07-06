using Microsoft.EntityFrameworkCore;
using Axivon.Domain.Entities.Core;
using Axivon.Domain.Entities.Crm;
using Axivon.Domain.Entities.Tasks;
using Axivon.Domain.Entities.Communication;
using Axivon.Domain.Entities.System;

namespace Axivon.Application.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Tenant> Tenants { get; }
    DbSet<TenantSetting> TenantSettings { get; }
    DbSet<TenantDomain> TenantDomains { get; }
    DbSet<User> Users { get; }
    DbSet<Role> Roles { get; }
    DbSet<Permission> Permissions { get; }
    DbSet<UserRole> UserRoles { get; }
    DbSet<RolePermission> RolePermissions { get; }
    DbSet<RefreshToken> RefreshTokens { get; }
    DbSet<PasswordResetToken> PasswordResetTokens { get; }
    DbSet<EmailVerificationToken> EmailVerificationTokens { get; }
    DbSet<UserTwoFactorSecret> UserTwoFactorSecrets { get; }
    DbSet<Company> Companies { get; }
    DbSet<CompanyAddress> CompanyAddresses { get; }
    DbSet<CompanyIndustry> CompanyIndustries { get; }
    DbSet<Contact> Contacts { get; }
    DbSet<ContactAddress> ContactAddresses { get; }
    DbSet<ContactTag> ContactTags { get; }
    DbSet<Lead> Leads { get; }
    DbSet<LeadSource> LeadSources { get; }
    DbSet<LeadStatus> LeadStatuses { get; }
    DbSet<LeadActivity> LeadActivities { get; }
    DbSet<LeadNote> LeadNotes { get; }
    DbSet<LeadAttachment> LeadAttachments { get; }
    DbSet<LeadTag> LeadTags { get; }
    DbSet<Pipeline> Pipelines { get; }
    DbSet<DealStage> DealStages { get; }
    DbSet<Deal> Deals { get; }
    DbSet<DealActivity> DealActivities { get; }
    DbSet<DealProduct> DealProducts { get; }
    DbSet<TaskItem> Tasks { get; }
    DbSet<TaskComment> TaskComments { get; }
    DbSet<TaskAttachment> TaskAttachments { get; }
    DbSet<TaskChecklist> TaskChecklists { get; }
    DbSet<CalendarEvent> CalendarEvents { get; }
    DbSet<Meeting> Meetings { get; }
    DbSet<MeetingParticipant> MeetingParticipants { get; }
    DbSet<Email> Emails { get; }
    DbSet<EmailTemplate> EmailTemplates { get; }
    DbSet<CallLog> CallLogs { get; }
    DbSet<Notification> Notifications { get; }
    DbSet<NotificationRecipient> NotificationRecipients { get; }
    DbSet<DashboardWidget> DashboardWidgets { get; }
    DbSet<UserPreference> UserPreferences { get; }
    DbSet<SavedReport> SavedReports { get; }
    DbSet<ReportSchedule> ReportSchedules { get; }
    DbSet<FileEntity> Files { get; }
    DbSet<FileFolder> FileFolders { get; }
    DbSet<Tag> Tags { get; }
    DbSet<EntityTag> EntityTags { get; }
    DbSet<Note> Notes { get; }
    DbSet<Activity> Activities { get; }
    DbSet<AuditLog> AuditLogs { get; }
    DbSet<LoginHistory> LoginHistories { get; }
    DbSet<Plan> Plans { get; }
    DbSet<Subscription> Subscriptions { get; }
    DbSet<BillingTransaction> BillingTransactions { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
