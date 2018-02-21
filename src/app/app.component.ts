import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe';

import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService]
})
export class AppComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public recipes: Recipe[];
  public currRecipe: Recipe;
  public nameFilter: string = '';
  constructor(
    private recipesService: RecipesService,
    public dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
      this.getRecipes();
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  getRecipes() {
    this.recipesService.getRecipes()
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.currRecipe = recipes[0];
      });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(RecipeModalComponent, {
      width: '320px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      result && this.addRecipe(result);
    });
  }

  addRecipe(recipe) {
    this.recipesService.addRecipe(recipe)
      .subscribe((recipe: Recipe) => {
        this.recipes.push(recipe);
        this.getRecipes();
      });
  }

  onSelectRecipe(recipe) {
    this.currRecipe = recipe;
  }

  onChangeNameFilter(filter) {
    this.nameFilter = filter;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
