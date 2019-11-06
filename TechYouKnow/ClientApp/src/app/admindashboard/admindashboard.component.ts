import { BloginmemoryService } from './../bloginmemory.service';
import { Blog } from './../Blog';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Category } from '../Category';
import { CategoriesService } from '../category.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  blogs: Blog[] = [];
  categories: Category[];

  constructor(
    private blogService: BlogsService,
    private categoryService: CategoriesService,
    private jwtHelper: JwtHelperService,
    private router: Router) { }

  ngOnInit() {
    if (this.isUserAuthenticated) {
      this.getBlogs();
      this.getCategories();
    }
    else {
      this.router.navigate(["login"]);
    }
  }

  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs.reverse());
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.reverse());
  }

  deleteBlog(blog: Blog): void {
    this.blogs = this.blogs.filter(h => h !== blog);
    this.blogService.deleteBlog(blog).subscribe();
  }

  deleteCategory(category: Category): void {
    this.categories = this.categories.filter(h => h !== category);
    this.categoryService.deleteCategory(category).subscribe();
  }

  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }
    else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.router.navigate(["/"]);
  } 
}
