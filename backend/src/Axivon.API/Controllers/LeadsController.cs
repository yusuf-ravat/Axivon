using Microsoft.AspNetCore.Mvc;

namespace Axivon.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LeadsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { message = "Get all leads" });
    }
}
