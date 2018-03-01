import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe';
import {TruncatePipe} from '../../truncate.pipe';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-content',
  templateUrl: './recipes-content.component.html',
  styleUrls: ['./recipes-content.component.css'],
})
export class RecipesContentComponent implements OnInit {
  currentCategory: string;
  private subscription: Subscription;

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
    this.subscription = this.recipesService.observableRecipes
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }

  getRecipes(category) : void {
    this.currentCategory = category;
    this.recipesService.getRecipes(category)
     // .subscribe(recipes => this.recipes = recipes);
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
