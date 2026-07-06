using Axivon.Application.Interfaces;

namespace Axivon.Infrastructure.Email;

public class EmailService : IEmailService
{
    public async Task SendEmailAsync(string to, string subject, string body)
    {
        await Task.CompletedTask;
    }
}
