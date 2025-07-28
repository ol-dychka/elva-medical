using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController(UserService userService, TokenService tokenService, CourseService courseService, IConfiguration config) : ControllerBase
    {
        private readonly UserService _userService = userService;
        private readonly TokenService _tokenService = tokenService;
        private readonly CourseService _courseService = courseService;
        private readonly IConfiguration _config = config;

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            //delete later
            // var newCourse = new Course
            // {
            //     Title = "Yoga for improved mobility",
            //     Instructor = "James Watkins",
            //     StartDate = DateTime.UtcNow,
            //     FinishDate = DateTime.UtcNow.AddMonths(2),
            //     Schedule = new List<CourseSession>
            //     {
            //         new() { Day = "Monday", Time = "10:00 AM" },
            //         new() { Day = "Wednesday", Time = "2:30 PM" }
            //     }
            // };
            // await _courseService.CreateAsync(newCourse);

            var user = await _userService.GetByEmailAsync(dto.Email);
            if (user != null) return BadRequest("Email is already in use");

            if (!_userService.IsValidPassword(dto.Password))
                return BadRequest("Password must be 8+ characters with a capital letter and a number");

            if (!_userService.IsValidEmail(dto.Email))
                return BadRequest("Email is not correct or not supported");

            var refreshToken = _tokenService.GenerateRefreshToken();

            User newUser = new(dto, refreshToken);
            await _userService.CreateAsync(newUser);

            var accessToken = _tokenService.GenerateAccessToken(newUser.Id!, newUser.Email);

            Response.Cookies.Append("refreshToken", refreshToken, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                Expires = DateTime.UtcNow.AddDays(14),
            });

            return Ok(new { accessToken });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var user = await _userService.ValidateByCredentialsAsync(dto.Email, dto.Password);
            if (user == null) return BadRequest("Invalid credentials");

            var accessToken = _tokenService.GenerateAccessToken(user.Id!, user.Email);
            var refreshToken = _tokenService.GenerateRefreshToken();

            await _userService.SaveRefreshTokenAsync(user.Id!, refreshToken);

            Response.Cookies.Append("refreshToken", refreshToken, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                Expires = DateTime.UtcNow.AddDays(14),
            });

            return Ok(new { accessToken });
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh()
        {
            if (!Request.Cookies.TryGetValue("refreshToken", out var refreshToken))
                return Unauthorized();

            var user = await _userService.GetByRefreshTokenAsync(refreshToken);
            if (user == null)
                return Unauthorized();

            var newAccessToken = _tokenService.GenerateAccessToken(user.Id!, user.Email);

            return Ok(new { accessToken = newAccessToken });
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            // Read the refresh token from the cookie
            if (!Request.Cookies.TryGetValue("refreshToken", out var refreshToken))
                return Ok(); // No token = already logged out

            // Remove the refresh token from the DB
            await _userService.RemoveRefreshTokenAsync(refreshToken);

            // Clear the cookie on the client
            Response.Cookies.Delete("refreshToken");

            return Ok();
        }
    }
}