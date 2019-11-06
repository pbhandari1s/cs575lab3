import { Blog } from './../Blog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { BlogsService } from '../blogs.service';
import { BloginmemoryService } from '../bloginmemory.service';

@Component({
  selector: 'app-simplesearch',
  templateUrl: './simplesearch.component.html',
  styleUrls: ['./simplesearch.component.css']
})
export class SimplesearchComponent implements OnInit {

  blogs$: Observable<Blog[]>;
  private searchTerms = new Subject<string>();

  constructor(private blogService: BlogsService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.blogs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.blogService.searchBlogs(term)),
    );
  }
}
