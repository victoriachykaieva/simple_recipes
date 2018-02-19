import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService]
})
export class AppComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public recipes;
  public currRecipe;
  public nameFilter = '';
  constructor(
    private recipesService: RecipesService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
    this.recipes = recipesService.recipes;
    this.recipes.subscribe(result => this.currRecipe = result[0]);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  onSelectRecipe(recipe) {
    this.currRecipe = recipe;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
