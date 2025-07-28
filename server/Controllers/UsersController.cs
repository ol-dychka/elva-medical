using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("user")]
    public class UsersController(UserService userService, CourseService courseService) : ControllerBase
    {
        private readonly UserService _userService = userService;
        private readonly CourseService _courseService = courseService;

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string? email = User.FindFirst(ClaimTypes.Email)?.Value;
            var user = await _userService.GetByEmailAsync(email!);
            
            if (user != null)
            {
                var courses = await _courseService.FindMultipleAsync(user.Courses);
                return Ok(new UserDto(user, courses));
            }

            return NotFound();
        }

        [Authorize]
        [HttpPost("update")]
        public async Task<IActionResult> Update(UpdateUserDto dto)
        {
            string? id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (id != null)
            {
                await _userService.UpdateUserAsync(id, dto.Name, dto.Phone);

                var user = await _userService.GetByIdAsync(id);
                if (user != null)
                {
                    var courses = await _courseService.FindMultipleAsync(user.Courses);
                    return Ok(new UserDto(user, courses));
                }

                return NotFound();
            }

            return BadRequest("Could not update information. Try again later");
        }

        [Authorize]
        [HttpPost("appointment/{id}")]
        public async Task<IActionResult> UpdateAppointment(UpdateAppointmentDto dto, string id)
        {
            string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userId != null)
            {
                var parsedId = ObjectId.Parse(id);
                await _userService.UpdateAppointmentAsync(userId, parsedId, dto.Date);

                var user = await _userService.GetByIdAsync(userId);
                if (user != null)
                {
                    var courses = await _courseService.FindMultipleAsync(user.Courses);
                    return Ok(new UserDto(user, courses));
                }

                return NotFound();
            }
            
            return BadRequest("Could not update information. Try again later");
        }
    }
}
