import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipes-content',
  templateUrl: './recipes-content.component.html',
  styleUrls: ['./recipes-content.component.css']
})
export class RecipesContentComponent implements OnInit {

  @Input() recipes: Recipe[];
  
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
    .data
    .subscribe(data => this.getRecipes(data.category));
  }

  getRecipes(category) {
    this.recipesService.getRecipes(category)
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }
}
