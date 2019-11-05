import { BlogsService } from './../blogs.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../Blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  public errorMsg;
  hasResult: boolean;
  text: string;
  private sub: any;
  searchResults: Blog[];

  constructor(private _blogService: BlogsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.text = params['text'];
    });

    this._blogService.getBlogs()
      .subscribe(data => {
        this.searchResults = data.filter(x => x.intro.toLowerCase().includes(this.text.toLowerCase()) ||
          x.content.toLowerCase().includes(this.text.toLowerCase()) ||
          x.title.toLowerCase().includes(this.text.toLowerCase()));
        this.hasResult = this.searchResults.length > 0;
      }), error => this.errorMsg = error;
  }
}
