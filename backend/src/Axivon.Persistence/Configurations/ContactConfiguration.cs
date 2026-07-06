using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Axivon.Domain.Entities.Core;
using Axivon.Domain.Entities.Crm;
using Axivon.Domain.Entities.Tasks;
using Axivon.Domain.Entities.Communication;
using Axivon.Domain.Entities.System;

namespace Axivon.Persistence.Configurations;

public class ContactConfiguration : IEntityTypeConfiguration<Contact>
{
    public void Configure(EntityTypeBuilder<Contact> builder)
    {
        builder.HasKey(c => c.Id);
        builder.Property(c => c.Name).IsRequired().HasMaxLength(100);
    }
}
