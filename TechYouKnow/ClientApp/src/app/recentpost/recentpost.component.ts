import { BlogsService } from './../blogs.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../Blog'

@Component({
  selector: 'app-recentpost',
  templateUrl: './recentpost.component.html',
  styleUrls: ['./recentpost.component.css']
})
export class RecentpostComponent implements OnInit {
  public errorMsg;

  recentPosts: Blog[];

  constructor(private _blogService: BlogsService) {
  }

  ngOnInit() {
    this._blogService.getBlogs()
      .subscribe(data => {
        this.recentPosts = data.reverse().splice(0, 6);
      }), error => this.errorMsg = error;
  }
}
