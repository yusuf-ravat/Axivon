
# 🛡️ Axivon CRM - Backend Architecture (.NET 9 + Entity Framework Core)

> **Project Name:** Axivon CRM  
> **Architecture Pattern:** Clean Architecture (DDD-inspired)  
> **API Layer:** ASP.NET Core 9 Web API  
> **ORM Layer**: Entity Framework Core  
> **Database**: PostgreSQL  
> **Security**: JWT + Refresh Token Authentication  
> **OpenAPI Docs**: Swagger/OpenAPI

---

## 📂 Solution Structure & Dependency Flow

The backend follows the **Clean Architecture** pattern, splitting concerns into distinct layers to isolate core business rules from external frameworks, database connections, and services.

```text
Axivon.sln
src/
├── Axivon.API/           # Presentation Layer (Controllers, Middlewares, Program.cs)
├── Axivon.Application/   # Application Core (Business Logic, CQRS Commands/Queries, Use Cases)
├── Axivon.Domain/        # Domain Core (Enterprise Entities, Enums, Value Objects, Domain Exceptions)
├── Axivon.Infrastructure/# Infrastructure Adapters (AI Integration, Email, Storage, Caching Clients)
├── Axivon.Persistence/   # Data Access (DbContext, EF Configurations, Migrations, Repositories)
└── Axivon.Shared/        # Transversal helpers (Models, Exceptions, Extensions, Localization)
```

---

## 🏛️ Project Responsibility Matrix

### 1. ⚙️ Axivon.API (Presentation Layer)
Responsible for exposing HTTP REST endpoints, managing CORS configurations, rate-limiting rules, exception filters, and initial request authorization.

```text
Axivon.API/
├── Controllers/           # Api Controllers mapping features
├── Middlewares/           # Custom logging, tenant, and JWT middleware
├── Filters/               # Custom exception and action filters
├── Authorization/         # Custom claim and policy handlers
├── Extensions/            # IServiceCollection dependency mappings
├── Endpoints/             # Minimal API routes definitions
├── Configuration/         # App settings schema readers
├── Swagger/               # Swagger custom security scheme options
├── appsettings.json       # General settings
├── Program.cs             # Application builder entrypoint
└── launchSettings.json    # Kestrel server profiles configuration
```

---

### 2. ⚡ Axivon.Application (Application Core Layer)
Encapsulates all application-specific business rules. Implements the mediator pattern (MediatR) to route incoming queries and commands to specific logic handlers.

```text
Axivon.Application/
├── Interfaces/            # Abstract contracts for adapters (DbContext, Email, Cache, Storage)
├── DTOs/                  # Global Data Transfer Objects
├── Features/              # Main CQRS Feature folders
├── Validators/            # Input validation logic using FluentValidation
├── Behaviors/             # MediatR pipeline behaviors (Logging, Validation, Performance)
├── Mappings/              # AutoMapper profiling profiles
├── Exceptions/            # Custom application layer exceptions
├── Services/              # Helper domain orchestrations
└── Specifications/        # Specification models for generic repositories queries
```

#### 📂 Features Directory Mapping
Each module has its own directory containing CQRS queries, commands, models, mappings, and validation files.

*   `Authentication` • `Users` • `Roles` • `Permissions` • `Leads` • `Contacts`
*   `Companies` • `Deals` • `Tasks` • `Activities` • `Calendar` • `Notifications`
*   `Reports` • `Dashboard` • `Billing` • `Settings` • `AI`

> **Example structure for `Leads`**:
> ```text
> Features/Leads/
> ├── Commands/     # Mutating requests (CreateLeadCommand, UpdateLeadCommand)
> ├── Queries/      # Read-only requests (GetLeadByIdQuery, GetLeadsListQuery)
> ├── DTOs/         # Lead-specific Response/Request models
> ├── Validators/   # Form validators
> ├── Handlers/     # MediatR request execution handlers
> ├── Events/       # Lead domain events triggers (LeadCreatedEvent)
> └── Mappings/     # AutoMapper logic for leads
> ```

---

### 3. 🎯 Axivon.Domain (Core Domain Layer)
Contains the enterprise business rules and database model entities. It is strictly pure and has **zero external project dependencies** except for `Axivon.Shared`.

```text
Axivon.Domain/
├── Entities/             # Domain Model entity files
├── Enums/                # Global enums
├── ValueObjects/         # Immutable value models
├── Events/               # Core Domain events
├── Interfaces/           # Pure Domain interfaces
├── Constants/            # Policy names, roles, constraints
└── Exceptions/           # Domain business exceptions
```

#### 📁 Defined Entities List
- `Tenant.cs` • `User.cs` • `Role.cs` • `Permission.cs`
- `Lead.cs` • `LeadActivity.cs` • `Company.cs` • `Contact.cs`
- `Deal.cs` • `PipelineStage.cs` • `TaskItem.cs` • `Meeting.cs`
- `CalendarEvent.cs` • `Notification.cs` • `Attachment.cs`
- `Subscription.cs` • `Invoice.cs` • `AuditLog.cs`
- `BusinessMemory.cs` • `AIConversation.cs`

---

### 4. 🌐 Axivon.Infrastructure (Infrastructure Adapters Layer)
Implements all external library service hooks defined in the `Application` interfaces.

| Folder | Specific Service Files | Description |
| :--- | :--- | :--- |
| **`AI/`** | `OpenAIService.cs`, `GeminiService.cs`, `EmbeddingService.cs`, `PromptBuilder.cs`, `BusinessMemoryService.cs` | Connects domain data with OpenAI and Gemini API endpoints. |
| **`Storage/`** | `MinIOService.cs`, `S3StorageService.cs`, `LocalStorage.cs`, `MinIOStorage.cs`, `S3Storage.cs` | Handles document/attachment uploads to local, MinIO, or AWS S3. |
| **`Email/`** | `EmailService.cs`, `SMTPService.cs`, `/Templates` | Handles system SMTP notifications and templates rendering. |
| **`Cache/`** | `RedisService.cs` | Redis distributed caching manager. |
| **`BackgroundJobs/`** | `EmailJob.cs`, `NotificationJob.cs`, `ReminderJob.cs`, `SubscriptionJob.cs`, `MeetingJob.cs` | Configures background operations via Hangfire. |
| **`Logging/`** | `SerilogConfiguration.cs`, `AuditLogger.cs` | Structural logging pipeline. |

---

### 5. 🗄️ Axivon.Persistence (Data Access Layer)
Configures Entity Framework Core context database connection, migrations, Fluent API model configuration rules, and UoW.

```text
Axivon.Persistence/
├── Context/              # AxivonDbContext.cs implementation
├── Configurations/       # Fluent API model entities configurations
├── Repositories/         # Repositories (GenericRepository and specific implementations)
├── UnitOfWork/           # UnitOfWork database transaction scopes
├── Migrations/           # Database migration files
├── Seed/                 # Seeders (RoleSeeder, PermissionSeeder, DefaultAdminSeeder)
└── Interceptors/         # EF Core auditable entities save changes intercepts
```

---

### 6. 📦 Axivon.Shared (Transversal Core Layer)
Contains shared utility types, constants, localizers, and models usable across all architectural layers.

*   `Constants/` • `Helpers/` • `Extensions/` • `Responses/`
*   `Exceptions/` • `Models/` • `Utilities/` • `Localization/`

---

## 🔄 Core Flow Patterns

### Repository Pattern Flow
```text
IRepository<T> ➔ GenericRepository<T> ➔ LeadRepository ➔ LeadService ➔ LeadsController
```

### Entity Framework Core Pipeline
```text
Controller ➔ CommandHandler ➔ Repository/UnitOfWork ➔ DbContext (EF Core) ➔ PostgreSQL
```

---

## 🛠️ Main Middleware & Services Specification

### A. Middlewares (`Middlewares/`)
- `ExceptionMiddleware.cs`: Traps unhandled errors, formats JSON stack responses.
- `RequestLoggingMiddleware.cs`: Records HTTP request and response performance metrics.
- `TenantMiddleware.cs`: Identifies and configures connection string scoping for active tenants.
- `JWTMiddleware.cs`: Extracts claims and configures the active user context.
- `RateLimitMiddleware.cs`: Blocks request spikes from single IP ranges.

### B. Security & Identity (`Authentication/`)
- `JWTService.cs`: Token encoding and signature verification.
- `RefreshTokenService.cs`: Generates cryptographically secure keys for sliding session expirations.
- `CurrentUserService.cs`: Connects `IHttpContextAccessor` details to domain calls.
- `PasswordHasher.cs`: BCrypt/Argon2 password hashing utility.

---

## ⚙️ Dependency Injection Bootstrap
```csharp
builder.Services
    .AddApplication()
    .AddInfrastructure()
    .AddPersistence()
    .AddAuthentication()
    .AddAuthorization();
```

---

## 📈 Recommended Development Implementation Order

1.  **Solution & Project Setup**: Solution layout setup, solution file mapping.
2.  **Clean Architecture Core**: Dependency injection and Shared modules setup.
3.  **PostgreSQL + EF Core**: DB configuration, DBContext, Fluent API mappings, and initial migration run.
4.  **Authentication & Authorization**: JWT credentials service, password hashing, and user validation middleware.
5.  **Multi-Tenant Support**: Tenant filters and DB schema context separation.
6.  **User & Role Management**: CRUD capabilities on users, permissions matching.
7.  **Dashboard APIs**: Metrics aggregator APIs.
8.  **CRM Foundations**: Modules CRUD implementation: Leads, Contacts, and Companies.
9.  **Pipeline Management**: Deals tracking and pipeline progression stages.
10. **Productivity Tools**: Tasks, meeting scheduler, and interactive calendar hooks.
11. **Communication**: Hangfire email jobs, real-time SignalR notifications.
12. **AI Integration**: AI assistant foundations, context embeddings memory service, meeting summarized transcript generators.

---

## 🛠️ Step 1 - Backend Dependency & Setup Checklist

### Install Required NuGet Packages

```bash
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.Design
Npgsql.EntityFrameworkCore.PostgreSQL
Microsoft.AspNetCore.Authentication.JwtBearer
Microsoft.AspNetCore.Identity
FluentValidation.AspNetCore
AutoMapper.Extensions.Microsoft.DependencyInjection
Serilog.AspNetCore
Swashbuckle.AspNetCore
```

### Configure Core Modules
- [x] **PostgreSQL Connection**: Defined and injected the default connection string.
- [x] **Entity Framework Core**: Set up schema configurations and mappings.
- [x] **Dependency Injection**: Scoped repositories, UnitOfWork, and external services in the builder pipeline.
- [x] **Swagger Integration**: Set up API endpoints discovery and bearer token schemas.
- [x] **JWT Authentication**: Configured secure validation parameters and security keys.
- [x] **CORS Policy**: Configured wildcard mapping for local and external development APIs.
- [x] **Serilog Integration**: Set up structured logging outputs.

---


### Configure Core Handlers
- [x] **React Router**: Implemented BrowserRouter boundary routes.
- [x] **Axios Client**: Formulated base API handlers with connection timeouts.
- [x] **React Query Client**: Configured local cache lifetimes and queries provider.
- [x] **Zustand State Stores**: Set up session states and theme actions.
- [x] **System Theme**: Visual modes selector configured.
- [x] **Page Layouts**: Implemented flexible dashboard and auth wrappers.
- [x] **API Base URL**: Injected central API path targets.


# 🗄️ Axivon CRM - Phase 1 Database Tables Specification

This document details the database schema, tables, naming conventions, and relationship structures for Phase 1 (MVP) of **Axivon CRM**. The schema is designed for a highly performant **Multi-Tenant SaaS** environment running on **PostgreSQL** via **Entity Framework Core**.

---

## 🎯 Phase 1 Goals & Coverage
The database establishes a robust, highly modular foundation prior to introducing advanced AI features in Phase 2. The core modules include:
- Authentication & RBAC
- Multi-Tenancy & White-Labeling
- Lead, Company & Contact Management
- Deal Tracking & Pipelines
- Productivity Tools (Tasks, Calendar, Meetings)
- Auditing, Activity Logging & Security
- Subscription Management

---

## 📏 Naming & Design Conventions

### 1. Keys
- **Primary Keys**: Explicitly named `Id` using the `UUID` format.
- **Foreign Keys**: CamelCase referencing the target entity name suffixing `Id` (e.g., `TenantId`, `UserId`, `LeadId`).

### 2. Global Audit Columns
Every table in the database must include the following audit columns to ensure consistent tracking, soft-deletion safety, and optimistic concurrency checks:
```text
CreatedAt     - DateTime (UTC)
CreatedBy     - UUID (Nullable - for public actions)
UpdatedAt     - DateTime (UTC, Nullable)
UpdatedBy     - UUID (Nullable)
DeletedAt     - DateTime (UTC, Nullable)
DeletedBy     - UUID (Nullable)
IsDeleted     - Boolean (Default: false)
RowVersion    - Concurrency Token (byte[] / xmin in PostgreSQL)
```

---

## 🗂️ Table Schema Definitions

### 1. Multi-Tenant Modules
Tracks SaaS client accounts and configuration profiles.

#### 📄 `Tenants`
Stores corporate accounts subscribed to Axivon CRM.

#### 📄 `TenantSettings`
SaaS configurations per tenant. Includes UI Theme, Timezone, local Currency, branding Logo URL, Language preferences, and local Business Hours.

#### 📄 `TenantDomains` *(Recommended)*
Custom domain routing mappings (e.g., `crm.clientname.com`) pointing to a specific `TenantId` for white-label styling.

---

### 2. Authentication & Authorization Modules
Configures security tokens, MFA secrets, and Role-Based Access Control (RBAC).

#### 📄 `Users`
Core system credentials, password hashes, active sessions, and Tenant grouping locks.

#### 📄 `Roles`
User access roles (e.g., *Super Admin*, *Tenant Admin*, *Manager*, *Sales Representative*, *Employee*).

#### 📄 `Permissions`
Fine-grained application permission descriptors (e.g., `leads:create`, `deals:delete`).

#### 📄 `RolePermissions`
Many-to-Many relational join table linking `Roles` to `Permissions`.

#### 📄 `UserRoles`
Many-to-Many relational join table mapping `Users` to their respective `Roles`.

#### 📄 `RefreshTokens`
Cryptographically secure values supporting sliding JWT sessions.

#### 📄 `PasswordResetTokens`
Temporary recovery token maps supporting password recovery actions.

#### 📄 `EmailVerificationTokens`
Validation codes used during account signup activation checks.

#### 📄 `UserTwoFactorSecrets` *(Recommended)*
MFA/2FA cryptographic secrets mapping keys for user logins (TOTP).

---

### 3. CRM Company & Contact Modules
Tracks organizations and their key representatives.

#### 📄 `Companies`
Business profiles, domain details, description, and tenant grouping locks.

#### 📄 `CompanyAddresses`
Supports multiple office locations per company (Billing, Shipping, HQ).

#### 📄 `CompanyIndustries`
Lookup mapping classifying companies by industry classifications.

#### 📄 `Contacts`
Representative personal details (Name, Title, Email, phone lines).

#### 📄 `ContactAddresses`
Location maps associated with specific contact representatives.

#### 📄 `ContactTags`
Classification mapping matching contacts to categories.

---

### 4. CRM Lead Modules
Manages incoming prospects and conversion funnels.

#### 📄 `Leads`
Base prospect details, current valuation, status indicators, and sources.

#### 📄 `LeadSources`
Categorization lookup values (e.g., *Website*, *LinkedIn*, *Referral*, *Cold Call*).

#### 📄 `LeadStatuses`
Funnels state indicators (e.g., *New*, *Qualified*, *Contacted*, *Proposal Sent*, *Lost*).

#### 📄 `LeadActivities`
History timeline detailing actions performed on a specific lead.

#### 📄 `LeadNotes`
Detailed textual notes documented by managers.

#### 📄 `LeadAttachments`
File documents associated with the prospect.

#### 📄 `LeadTags`
Tag classification mapping.

---

### 5. CRM Deal & Pipeline Modules
Manages opportunities and transaction stages.

#### 📄 `Pipelines` *(Recommended)*
Enables multiple pipeline funnels per tenant (e.g., *Direct Sales*, *Partner Channels*, *Onboarding*).

#### 📄 `Deals`
Sales opportunities, transaction values, expected close dates, and win probabilities.

#### 📄 `DealStages`
Stages inside a pipeline (e.g., *Discovery*, *Negotiation*, *Closed Won*). Links to `Pipelines`.

#### 📄 `DealActivities`
Timeline detailing comments and status transitions for a specific deal.

#### 📄 `DealProducts`
Line items mapping products/services linked to a deal.

---

### 6. Task Management Modules
Action items and checklist logging.

- 📄 `Tasks`: Core actions, assignees, deadlines, and completion state.
- 📄 `TaskComments`: Threaded comments posted under specific tasks.
- 📄 `TaskAttachments`: Project files linked to tasks.
- 📄 `TaskChecklist`: Atomic sub-items checklist supporting multi-stage completion tracking.

---

### 7. Calendar & Meetings Modules
- 📄 `CalendarEvents`: General timeline scheduling logs.
- 📄 `Meetings`: Video call or physical meeting entries with scheduled times.
- 📄 `MeetingParticipants`: Maps users, leads, or contacts attending a meeting.

---

### 8. Communication History
- 📄 `Emails`: Outgoing and incoming email copies synced with customer profiles.
- 📄 `EmailTemplates`: Reusable rich HTML layouts.
- 📄 `CallLogs`: Metadata of calls (Duration, Notes, Outcome).

---

### 9. Notifications
- 📄 `Notifications`: Alert summaries, links, and system actions.
- 📄 `NotificationRecipients`: Maps a single notification to multiple target users.

---

### 10. Dashboard & User Preferences
- 📄 `DashboardWidgets`: Custom dashboard panels layout positions per user.
- 📄 `UserPreferences`: Custom theme (light/dark), default language, and sidebar collapse states.

---

### 11. Reports & File Management
- 📄 `SavedReports`: Customized queries saved by users.
- 📄 `ReportSchedules`: Cron definitions for automated email reports.
- 📄 `Files`: Stores attachment filenames, sizes, MIME types, and storage URLs.
- 📄 `FileFolders`: Virtual folders organizing uploaded files.

---

### 12. Global Helpers (Universal Tables)
- 📄 `Tags`: Global definitions of tags.
- 📄 `EntityTags`: Many-to-Many generic mapper linking any entity (Lead, Contact, Company) to a tag.
- 📄 `Notes`: Universal notes table linking comments to any business model.
- 📄 `Activities`: System-wide timeline tracking logs.
- 📄 `AuditLogs`: Audit tracking storing entity values changes (Before/After).
- 📄 `LoginHistory`: Secure log tracking login times, IP addresses, and browsers.

---

### 13. Subscription Billing Modules
- 📄 `Plans`: Available SaaS tiers (e.g., *Basic*, *Professional*, *Enterprise*).
- 📄 `Subscriptions`: Maps tenants to plans, active dates, and status.
- 📄 `BillingTransactions` *(Recommended)*: Logs payment history and invoice references.

---

## 🗃️ Phase 1 Summary Schema Map

```text
Tenant
│
├── TenantSettings & TenantDomains
├── Users
│     ├── UserRoles ➔ Roles ➔ RolePermissions ➔ Permissions
│     ├── RefreshTokens & UserTwoFactorSecrets
│     └── UserPreferences
│
├── Pipelines ➔ DealStages ➔ Deals ➔ DealProducts & DealActivities
│
├── Companies ➔ CompanyAddresses
│     └── Contacts ➔ ContactAddresses & ContactTags
│           └── Leads ➔ LeadActivities, LeadNotes & LeadAttachments
│
├── Tasks ➔ TaskComments, TaskAttachments & TaskChecklists
├── CalendarEvents & Meetings ➔ MeetingParticipants
├── Emails & CallLogs
└── AuditLogs & LoginHistory
```

---

## 📊 Summary of Phase 1 Tables

| Area | Included Tables | Count |
| :--- | :--- | :--- |
| **Core System / Auth** | Tenants, TenantSettings, TenantDomains, Users, Roles, Permissions, UserRoles, RolePermissions, RefreshTokens, PasswordResetTokens, EmailVerificationTokens, UserTwoFactorSecrets | **12** |
| **CRM Core** | Companies, CompanyAddresses, CompanyIndustries, Contacts, ContactAddresses, ContactTags, Leads, LeadSources, LeadStatuses, LeadActivities, LeadNotes, LeadAttachments, LeadTags, Pipelines, Deals, DealStages, DealActivities, DealProducts | **18** |
| **Tasks & Calendar** | Tasks, TaskComments, TaskAttachments, TaskChecklist, CalendarEvents, Meetings, MeetingParticipants | **7** |
| **Communication** | Emails, EmailTemplates, CallLogs | **3** |
| **General SaaS Features** | Notifications, NotificationRecipients, DashboardWidgets, UserPreferences, SavedReports, ReportSchedules, Files, FileFolders, Tags, EntityTags, Notes, Activities, AuditLogs, LoginHistory, Plans, Subscriptions, BillingTransactions | **17** |
| **TOTAL** | **Phase 1 Tables** | **57 Tables** |

> [!WARNING]
> Do NOT create **Phase 2 AI-related tables** (like `AIConversations`, `BusinessMemory`, `AICommands`, `MeetingTranscripts`, etc.) yet. These will be introduced as schema migrations in Phase 2 once the core CRM CRUD endpoints are fully stable.