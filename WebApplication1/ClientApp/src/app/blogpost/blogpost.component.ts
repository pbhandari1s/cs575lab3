import { BloginmemoryService } from './../bloginmemory.service';
import { BlogsService } from './../blogs.service';
import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../Blog'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  @Input() blog: Blog;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService,
    private location: Location) {
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id)
      .subscribe(blog => this.blog = blog);
  }

  ngOnInit(): void {
    this.getBlog();
  }

  goBack(): void {
    this.location.back();
  }
}
