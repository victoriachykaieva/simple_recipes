import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe;
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: RecipesService) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getRecipe(id)
      .subscribe((recipe) => {
        this.recipe = recipe[0];
      });
  }

}
