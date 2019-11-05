using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechYouKnow.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Intro { get; set; }
        public string Content { get; set; }
    }
}
