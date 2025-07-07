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
    public class AuthController(UserService userService, IConfiguration config) : ControllerBase
    {
        private readonly UserService _userService = userService;
        private readonly IConfiguration _config = config;

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUser user)
        {
            var existing = await _userService.GetByEmailAsync(user.Email);
            if (existing != null) return BadRequest("Email already in use");

            User newUser = new()
            {
                Email = user.Email,
                HashedPassword = BCrypt.Net.BCrypt.HashPassword(user.Password),
                Name = user.Name,
                Phone = user.Phone,
                EnrolledCourses = []
            };
            await _userService.CreateAsync(newUser); 

            var token = GenerateJwtToken(newUser);
            return Ok(new UserDto(newUser, token));
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUser user)
        {
            var existing = await _userService.GetByEmailAsync(user.Email);
            if (existing == null || !BCrypt.Net.BCrypt.Verify(user.Password, existing.HashedPassword))
                return Unauthorized("Invalid credentials");

            var token = GenerateJwtToken(existing);
            return Ok(new UserDto(existing, token));
        }

        private string GenerateJwtToken(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                expires: DateTime.UtcNow.AddMinutes(int.Parse(_config["Jwt:ExpiresInMinutes"]!)),
                signingCredentials: creds,
                claims: [new Claim(ClaimTypes.NameIdentifier, user.Id!), new Claim(ClaimTypes.Email, user.Email)]
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}