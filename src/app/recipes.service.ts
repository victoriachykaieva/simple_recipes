import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './recipe';

import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {
  public recipes: Observable<Recipe[]>;
  private recipesUrl = 'http://localhost:3000/recipes/';

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        map( recipes => recipes
            .sort( (a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0) )
        ),
        catchError(this.handleError('getRecipes', []))
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

