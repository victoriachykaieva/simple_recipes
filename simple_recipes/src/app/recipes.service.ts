import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './recipe';

import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {

  constructor(private http: HttpClient) { }

  get recipes() {
    return this.http.get<Recipe[]>('assets/recipes-list.json')
      .map( recipes => recipes
          .sort( (a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0) )
      );
  }

}

