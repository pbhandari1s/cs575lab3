import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Blog } from '../app/Blog';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { MessagesService } from './messages.service';

//CORS error No 'Access-Control-Allow-Origin' header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class BlogsService {

  private _url = '/api/blogposts';
  constructor(
    private _http: HttpClient,
    private messageService: MessagesService) { }

  getBlogs(): Observable<Blog[]> {
    return this._http.get<Blog[]>(this._url)
      .pipe(
        tap(_ => this.log('Blogs Fetched')),
        catchError(this.handleError<Blog[]>('getHeroes',
          []))
      );
  }

  getBlogNo404<Data>(id: number): Observable<Blog> {
    const url = `${this._url}/?id=${id}`;
    return this._http.get<Blog[]>(url)
      .pipe(
        map(blogs => blogs[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} blog id=${id}`);
        }),
        catchError(this.handleError<Blog>(`getBlog id=${id}`))
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error"); //throws either error message or “server error”   } 
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this._url}/${id}`;
    return this._http.get<Blog>(url).pipe(
      tap(_ => this.log(`fetched blog id=${id}`)),
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );
  }

  searchBlogs(term: string): Observable<Blog[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this._http.get<Blog[]>(`${this._url}/?title=${term}`).pipe(
      tap(_ => this.log(`found blogs matching "${term}"`)),
      catchError(this.handleError<Blog[]>('searchBlogs', []))
    );
  }

  addBlog(blog: Blog): Observable<Blog> {
    return this._http.post<Blog>(this._url, blog, httpOptions).pipe(
      tap((newBlog: Blog) => this.log(`added blog w/ id=${newBlog.id}`)),
      catchError(this.handleError<Blog>('addBlog'))
    );
  }

  deleteBlog(blog: Blog | number): Observable<Blog> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this._url}/${id}`;

    return this._http.delete<Blog>(url, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  updateBlog(blog: Blog | number): Observable<any> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this._url}/${id}`;

    //return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    return this._http.put(url, blog, httpOptions).pipe(
      // tap(_ => this.log(`updated hero id=${hero.id}`)),
      tap(_ => this.log(`updated blog id=${id}`)),
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
    this.messageService.add(`BlogService: ${message}`);
  }
}
