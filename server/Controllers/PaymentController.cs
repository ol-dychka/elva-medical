using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;
using Stripe;

namespace server.Controllers
{
    [ApiController]
    [Route("payment")]
    public class PaymentController(UserService userService, IConfiguration config) : ControllerBase
    {
        private readonly UserService _userService = userService;
        private readonly IConfiguration _config = config;

        [Authorize]
        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] PaymentRequest request)
        {
            var client = new Stripe.StripeClient(_config["StripeApiKey"]);
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
    }
}