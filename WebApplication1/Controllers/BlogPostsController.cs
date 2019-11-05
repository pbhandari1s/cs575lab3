using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    public class BlogPostsController : ControllerBase
    {
        private readonly TechYouKnowContext _context;

        public BlogPostsController(TechYouKnowContext context)
        {
            _context = context;
            if (_context.BlogPosts.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.BlogPosts.Add(new BlogPost
                {
                    Id = 1,
                    Title = "Blog BECode Title 1",
                    Intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
                });

                _context.BlogPosts.Add(new BlogPost
                {
                    Id = 2,
                    Title = "Blog BECode Title 2",
                    Intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
                });

                _context.BlogPosts.Add(new BlogPost
                {
                    Id = 3,
                    Title = "Blog BECode Title 3",
                    Intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
                });

                _context.BlogPosts.Add(new BlogPost
                {
                    Id = 4,
                    Title = "Blog BECode Title 4",
                    Intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
                });

                _context.BlogPosts.Add(new BlogPost
                {
                    Id = 5,
                    Title = "Blog BECode Title 5",
                    Intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
                });

                _context.BlogPosts.Add(new BlogPost
                {
                    Id = 6,
                    Title = "Blog BECode Title 6",
                    Intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
                });

                _context.SaveChanges();
            }
        }

        // GET: api/BlogPosts
        [HttpGet]
        [EnableCors("AllowAllHeaders")]//CORS error No 'Access-Control-Allow-Origin' header
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetBlogPosts()
        {
            return await _context.BlogPosts.ToListAsync();
        }

        // GET: api/BlogPosts/5
        [HttpGet("{id}")]
        [EnableCors("AllowAllHeaders")]//CORS error No 'Access-Control-Allow-Origin' header
        public async Task<ActionResult<BlogPost>> GetBlogPost(int id)
        {
            var blogPost = await _context.BlogPosts.FindAsync(id);

            if (blogPost == null)
            {
                return NotFound();
            }

            return blogPost;
        }

        // PUT: api/BlogPosts/5
        [HttpPut("{id}")]
        [EnableCors("AllowAllHeaders")]//CORS error No 'Access-Control-Allow-Origin' header
        public async Task<IActionResult> PutBlogPost(int id, BlogPost blogPost)
        {
            if (id != blogPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(id))
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

        // POST: api/BlogPosts
        [HttpPost]
        [EnableCors("AllowAllHeaders")]//CORS error No 'Access-Control-Allow-Origin' header
        public async Task<ActionResult<BlogPost>> PostBlogPost(BlogPost blogPost)
        {
            _context.BlogPosts.Add(blogPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogPost", new { id = blogPost.Id }, blogPost);
        }

        // DELETE: api/BlogPosts/5
        [HttpDelete("{id}")]
        [EnableCors("AllowAllHeaders")]//CORS error No 'Access-Control-Allow-Origin' header
        public async Task<ActionResult<BlogPost>> DeleteBlogPost(int id)
        {
            var blogPost = await _context.BlogPosts.FindAsync(id);
            if (blogPost == null)
            {
                return NotFound();
            }

            _context.BlogPosts.Remove(blogPost);
            await _context.SaveChangesAsync();

            return blogPost;
        }

        private bool BlogPostExists(int id)
        {
            return _context.BlogPosts.Any(e => e.Id == id);
        }
    }
}
