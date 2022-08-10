using System.Net;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DatingApp.API.Models;
using DatingApp.API.Data;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly IAuthRepository _repo;

        public AuthController(ILogger<AuthController> logger, IAuthRepository repo)
        {
            _repo = repo;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(string username, string password)
        {
            username = username.ToLower();

            if(await _repo.UserExist(username))
                return BadRequest("User Aleardy Exist");

            var userToCreate = new User
            {
                UserName = username
            };

            var CreatedUser = await _repo.Register(userToCreate, password);

            return StatusCode(201);
        }
    }
}