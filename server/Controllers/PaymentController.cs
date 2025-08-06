using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using server.Models;
using server.Services;
using Stripe;

namespace server.Controllers
{
    [ApiController]
    [Route("payment")]
    public class PaymentController(UserService userService, CourseService courseService) : ControllerBase
    {
        private readonly UserService _userService = userService;
        private readonly CourseService _courseService = courseService;


        [Authorize]
        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] PaymentRequest request)
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = request.Amount,
                Currency = "usd",
                AutomaticPaymentMethods = new PaymentIntentAutomaticPaymentMethodsOptions
                {
                    Enabled = true,
                },
            };

            var service = new PaymentIntentService();
            var intent = await service.CreateAsync(options);

            return Ok(new { clientSecret = intent.ClientSecret });
        }

        [Authorize]
        [HttpPost("{id}")]
        public async Task<IActionResult> Delete([FromRoute] string id)
        {
            // ideally there should be a banking module that checks if money
            // was actually sent by user. Omitted for simplicity.
            string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userId != null)
            {
                var parsedId = ObjectId.Parse(id);
                await _userService.DeletePaymentAsync(userId, parsedId);

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