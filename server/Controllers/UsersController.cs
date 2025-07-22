using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("user")]
    public class UsersController(UserService userService) : ControllerBase
    {
        private readonly UserService _userService = userService;

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string? email = User.FindFirst(ClaimTypes.Email)?.Value;
            var user = await _userService.GetByEmailAsync(email!);
            return user != null ? Ok(new UserDto(user)) : NotFound();
        }

        [Authorize]
        [HttpPost("update")]
        public async Task<IActionResult> Update(UpdateDto dto)
        {
            string? email = User.FindFirst(ClaimTypes.Email)?.Value;
            var user = await _userService.GetByEmailAsync(email!);

            if (user != null)
            {
                user.Name = dto.Name;
                user.Phone = dto.Phone;

                await _userService.UpdateAsync(user);

                return Ok(new UserDto(user));
            }

            return BadRequest("Could not update information. Try again later");
        }
    }
}
