import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoriesService } from '../category.service';

@Component({
  selector: 'app-blogcategories',
  templateUrl: './blogcategories.component.html',
  styleUrls: ['./blogcategories.component.css']
})
export class BlogcategoriesComponent implements OnInit {
  public errorMsg;
  blogCategories: Category[];

  constructor(private _categoryService: CategoriesService) {
  }

  ngOnInit() {
    this._categoryService.getCategories()
      .subscribe(data => {
        this.blogCategories = data.reverse().splice(0, 4);
      }), error => this.errorMsg = error;
  }
}
