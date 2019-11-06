using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using TechYouKnow.Models;

namespace TechYouKnow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IConfiguration configuration;
        public AuthController(IConfiguration iconfig)
        {
            configuration = iconfig;
        }
        // GET api/values
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if ((user.UserName == "pbhandari1s" && user.Password == "pbhandari1s") ||
                (user.UserName == "dkudriashov1s" && user.Password == "dkudriashov1s") ||
                (user.UserName == "hkaveri1s" && user.Password == "hkaveri1s") ||
                (user.UserName == "mahamedfizer1s" && user.Password == "mahamedfizer1s") ||
                (user.UserName == "tembuldeniya1s" && user.Password == "tembuldeniya1s") ||
                (user.UserName == "zliu" && user.Password == "zliu"))
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("cs506@coreangular"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role, "Admin")
                };

                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://localhost:44382",
                    audience: "https://localhost:44382",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(15),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}