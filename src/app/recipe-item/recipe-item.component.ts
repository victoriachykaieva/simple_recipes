import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe;
  @Input() nameFilter;
  @Output() onSelectRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe) {
    this.onSelectRecipe.emit(recipe);
  }

}
