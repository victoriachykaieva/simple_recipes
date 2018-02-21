import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe';

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
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
      this.getRecipes();
      //this.recipes = recipesService.recipes;
      //this.recipes.subscribe(result => this.currRecipe = result[0]);
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  getRecipes(){
    this.recipesService.getRecipes()
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.currRecipe = recipes[0];
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
