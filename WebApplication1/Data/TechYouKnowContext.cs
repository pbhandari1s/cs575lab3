using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechYouKnow.Models;

namespace TechYouKnow.Data
{
    public class TechYouKnowContext : DbContext
    {
        public TechYouKnowContext(DbContextOptions<TechYouKnowContext> options)
            : base(options)
        {

        }
        public DbSet<BlogCategory> BlogCategories { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}
