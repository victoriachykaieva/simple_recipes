import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/category';

import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {
  public categories: Observable<Category[]>;
  private categoriesUrl = 'http://localhost:3000/categories/';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        map( categories => categories),
        catchError(this.handleError('getCategories', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}