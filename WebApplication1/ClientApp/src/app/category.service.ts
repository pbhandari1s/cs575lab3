import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from '../app/Category';
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

export class CategoriesService {

  private _url = '/api/blogcategories';
  constructor(
    private _http: HttpClient,
    private messageService: MessagesService) { }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(this._url)
      .pipe(
        tap(_ => this.log('Categorys Fetched')),
        catchError(this.handleError<Category[]>('getHeroes',
          []))
      );
  }

  getCategoryNo404<Data>(id: number): Observable<Category> {
    const url = `${this._url}/?id=${id}`;
    return this._http.get<Category[]>(url)
      .pipe(
        map(categories => categories[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} category id=${id}`);
        }),
        catchError(this.handleError<Category>(`getCategory id=${id}`))
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error"); //throws either error message or “server error”   } 
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this._url}/${id}`;
    return this._http.get<Category>(url).pipe(
      tap(_ => this.log(`fetched category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  searchCategories(term: string): Observable<Category[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this._http.get<Category[]>(`${this._url}/?title=${term}`).pipe(
      tap(_ => this.log(`found categories matching "${term}"`)),
      catchError(this.handleError<Category[]>('searchCategorys', []))
    );
  }

  addCategory(category: Category): Observable<Category> {
    return this._http.post<Category>(this._url, category, httpOptions).pipe(
      tap((newCategory: Category) => this.log(`added category w/ id=${newCategory.id}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  deleteCategory(category: Category | number): Observable<Category> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this._url}/${id}`;

    return this._http.delete<Category>(url, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  updateCategory(category: Category | number): Observable<any> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this._url}/${id}`;

    //return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    return this._http.put(url, category, httpOptions).pipe(
      // tap(_ => this.log(`updated hero id=${hero.id}`)),
      tap(_ => this.log(`updated category id=${id}`)),
      catchError(this.handleError<any>('updateCategory'))
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
    this.messageService.add(`CategoryService: ${message}`);
  }
}
