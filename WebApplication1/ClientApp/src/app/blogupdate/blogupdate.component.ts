import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../Blog';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { Location } from '@angular/common';
import { BloginmemoryService } from '../bloginmemory.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogupdate',
  templateUrl: './blogupdate.component.html',
  styleUrls: ['./blogupdate.component.css']
})
export class BlogupdateComponent implements OnInit {
  @Input() blog: Blog;
  blogs: Blog[];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBlog();
    this.getBlogs();
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.blogService.getBlog(id)
        .subscribe(hero => this.blog = hero);
    }
    else {
      this.blog = new Blog(0, "", "", "");
    }
  }

  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs.reverse());
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.blog.id > 0) {
      this.blogService.updateBlog(this.blog)
        .subscribe(() => this.goBack());
    }
    else {
      this.blogService.addBlog(this.blog)
        .subscribe(blog => {
          this.blogs.push(blog);
          this.goBack();
        });
    }
  }
}
