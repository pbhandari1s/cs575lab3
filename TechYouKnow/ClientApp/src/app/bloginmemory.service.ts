import { Blog } from './Blog';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BloginmemoryService {

  private blogsUrl = 'api/blogs';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':
        'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessagesService
  ) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogsUrl)
      .pipe(
        tap(_ => this.log('Blogs Fetched')),
        catchError(this.handleError<Blog[]>('getHeroes',
          []))
      );
  }

  getBlogNo404<Data>(id: number): Observable<Blog> {
    const url = `${this.blogsUrl}/?id=${id}`;
    return this.http.get<Blog[]>(url)
      .pipe(
        map(blogs => blogs[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} blog id=${id}`);
        }),
        catchError(this.handleError<Blog>(`getBlog id=${id}`))
      );
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this.blogsUrl}/${id}`;
    return this.http.get<Blog>(url).pipe(
      tap(_ => this.log(`fetched blog id=${id}`)),
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );
  }

  searchBlogs(term: string): Observable<Blog[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Blog[]>(`${this.blogsUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found blogs matching "${term}"`)),
      catchError(this.handleError<Blog[]>('searchBlogs', []))
    );
  }

  addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.blogsUrl, blog, this.httpOptions).pipe(
      tap((newBlog: Blog) => this.log(`added blog w/ id=${newBlog.id}`)),
      catchError(this.handleError<Blog>('addBlog'))
    );
  }

  deleteBlog(blog: Blog | number): Observable<Blog> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this.blogsUrl}/${id}`;

    return this.http.delete<Blog>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted blog id=${id}`)),
      catchError(this.handleError<Blog>('deleteBlog'))
    );
  }

  updateBlog(blog: Blog): Observable<any> {
    return this.http.put(this.blogsUrl, blog, this.httpOptions).pipe(
      tap(_ => this.log(`updated blog id=${blog.id}`)),
      catchError(this.handleError<any>('updateBlog'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`BlogInMemoryService: ${message}`);
  }
}
