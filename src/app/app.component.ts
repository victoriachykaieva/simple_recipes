import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { RecipesService } from './services/recipes.service';
import { Recipe } from './models/recipe';
import { CategoriesService } from './services/categories.service';
import { Category } from './models/category';

import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriesService]
})
export class AppComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public recipes: Recipe[];
  public options;
  public categories: Category[];
  public currCategory: Category;
  public nameFilter: string = '';
  constructor(
    private recipesService: RecipesService,
    private categoriesService: CategoriesService,
    private router: Router,
    public dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
      this.getCategories();
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  getRecipes() {
    this.recipesService.getRecipes(this.currCategory.name)
      .subscribe((recipes) => {
        this.options = { recipes };
      });
  }

  getCategories() {
    this.categoriesService.getCategories()
    .subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSelectCategory (category) {
    this.currCategory = category;
    this.router.navigateByUrl(category.name);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(RecipeModalComponent, {
      width: '320px',
      data: { categories: this.categories }
    });

    dialogRef.afterClosed().subscribe(result => {
      result && this.addRecipe(result);
    });
  }

  addRecipe(recipe) {
    this.recipesService.addRecipe(recipe)
      .subscribe((recipe: Recipe) => {
        this.getRecipes();
      });
  }

  onChangeNameFilter(filter) {
    this.nameFilter = filter;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
