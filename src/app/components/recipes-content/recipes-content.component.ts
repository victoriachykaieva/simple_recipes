import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipes-content',
  templateUrl: './recipes-content.component.html',
  styleUrls: ['./recipes-content.component.css']
})
export class RecipesContentComponent implements OnInit {
  currentCategory: string;
  recipes: Recipe[] = [];

  @Input() options;
  
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute) {
    }

  ngOnChanges(changes: SimpleChanges) {
    this.recipes = changes.options.currentValue ? 
    changes.options.currentValue.recipes : [];
  }

  ngOnInit() {
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
}
