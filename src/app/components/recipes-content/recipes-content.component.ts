import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe';
import {TruncatePipe} from '../../truncate.pipe';

@Component({
  selector: 'app-recipes-content',
  templateUrl: './recipes-content.component.html',
  styleUrls: ['./recipes-content.component.css'],
})
export class RecipesContentComponent implements OnInit {
  currentCategory: string;

  @Input() recipes: Recipe[];
  
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute) {
    }

  ngOnChanges(changes: SimpleChanges) {
    this.recipes = changes.recipes.currentValue ? 
    changes.recipes.currentValue : [];
  }

  ngOnInit() {
    this.recipes = [];
    this.route
    .data
    .subscribe(data => this.getRecipes(data.category));
  }

  getRecipes(category) {
    this.currentCategory = category;
    this.recipesService.getRecipes(category)
      .subscribe(recipes => this.recipes = recipes);
  }

  recipe;
  deleteRecipe(recipe) {
    this.recipesService.deleteRecipe(recipe)
    .subscribe(() => {
      this.getRecipes(this.currentCategory);
    });
  }

  ngOnDestroy() {
    console.log(this);
    this.recipes = [];
  }
}
