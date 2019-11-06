using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TechYouKnow.Data;
using TechYouKnow.Models;

namespace TechYouKnow.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAllHeaders")]//CORS error No 'Access-Control-Allow-Origin' header
    [ApiController]
    public class BlogCategoriesController : ControllerBase
    {
        private readonly TechYouKnowContext _context;

        public BlogCategoriesController(TechYouKnowContext context)
        {
            _context = context;
            if (_context.BlogCategories.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.BlogCategories.Add(new BlogCategory { Id = 1, Title = "BECode Category 1" });
                _context.BlogCategories.Add(new BlogCategory { Id = 2, Title = "BECode Category 2" });
                _context.BlogCategories.Add(new BlogCategory { Id = 3, Title = "BECode Category 3" });
                _context.BlogCategories.Add(new BlogCategory { Id = 4, Title = "BECode Category 4" });
                _context.BlogCategories.Add(new BlogCategory { Id = 5, Title = "BECode Category 5" });
                _context.SaveChanges();
            }
        }

        // GET: api/BlogCategories
        [HttpGet]
        [EnableCors("AllowAllHeaders")]//CORS error No 'Access-Control-Allow-Origin' header
        public async Task<ActionResult<IEnumerable<BlogCategory>>> GetBlogCategories()
        {
            return await _context.BlogCategories.ToListAsync();
        }

        // GET: api/BlogCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogCategory>> GetBlogCategory(int id)
        {
            var blogCategory = await _context.BlogCategories.FindAsync(id);

            if (blogCategory == null)
            {
                return NotFound();
            }

            return blogCategory;
        }

        // PUT: api/BlogCategories/5
        [HttpPut("{id}"), Authorize]
        public async Task<IActionResult> PutBlogCategory(int id, BlogCategory blogCategory)
        {
            if (id != blogCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BlogCategories
        [HttpPost, Authorize]
        public async Task<ActionResult<BlogCategory>> PostBlogCategory(BlogCategory blogCategory)
        {
            _context.BlogCategories.Add(blogCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogCategory", new { id = blogCategory.Id }, blogCategory);
        }

        // DELETE: api/BlogCategories/5
        [HttpDelete("{id}"), Authorize]
        public async Task<ActionResult<BlogCategory>> DeleteBlogCategory(int id)
        {
            var blogCategory = await _context.BlogCategories.FindAsync(id);
            if (blogCategory == null)
            {
                return NotFound();
            }

            _context.BlogCategories.Remove(blogCategory);
            await _context.SaveChangesAsync();

            return blogCategory;
        }

        private bool BlogCategoryExists(int id)
        {
            return _context.BlogCategories.Any(e => e.Id == id);
        }
    }
}
