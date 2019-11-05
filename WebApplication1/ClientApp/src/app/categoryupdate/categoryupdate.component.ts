import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../Category';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { Location } from '@angular/common';
import { BloginmemoryService } from '../bloginmemory.service';
import { Title } from '@angular/platform-browser';
import { CategoriesService } from '../category.service';

@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent implements OnInit {
  @Input() category: Category;
  categories: Category[];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getCategories();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.categoryService.getCategory(id)
        .subscribe(category => this.category = category);
    }
    else {
      this.category = new Category(0, "");
    }
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.reverse());
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.category.id > 0) {
      this.categoryService.updateCategory(this.category)
        .subscribe(() => this.goBack());
    }
    else {
      this.categoryService.addCategory(this.category)
        .subscribe(category => {
          this.categories.push(category);
          this.goBack();
        });
    }
  }
}
