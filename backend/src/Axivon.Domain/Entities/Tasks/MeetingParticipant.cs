using Axivon.Domain.Common;

namespace Axivon.Domain.Entities.Tasks;

public class MeetingParticipant : BaseEntity
{
    public Guid MeetingId { get; set; }
    public Meeting? Meeting { get; set; }
    public Guid UserId { get; set; }
    public User? User { get; set; }
    public string Role { get; set; } = "Attendee"; // Host, Presenter, Attendee
}
