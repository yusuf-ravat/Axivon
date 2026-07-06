using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Axivon.Domain.Entities.Core;
using Axivon.Domain.Entities.Crm;
using Axivon.Domain.Entities.Tasks;
using Axivon.Domain.Entities.Communication;
using Axivon.Domain.Entities.System;

namespace Axivon.Persistence.Configurations;

public class TaskConfiguration : IEntityTypeConfiguration<TaskItem>
{
    public void Configure(EntityTypeBuilder<TaskItem> builder)
    {
        builder.HasKey(t => t.Id);
        builder.Property(t => t.Title).IsRequired().HasMaxLength(150);
    }
}
