namespace Axivon.Application.Features.Leads.Commands;

public class CreateLeadCommand
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public decimal Value { get; set; }
}
