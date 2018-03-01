import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MediaMatcher} from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HighlightPipe } from './highlight.pipe';
import { TruncatePipe } from './truncate.pipe';
import { RecipesContentComponent } from './components/recipes-content/recipes-content.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';
import { CategoryComponent } from './components/category/category.component';
import { RecipesService } from './services/recipes.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/all-recipes', pathMatch: 'full'},
  { path: 'all-recipes', component: RecipesContentComponent, data: {category: 'all'} },
  { path: 'all-recipes/:id', component: RecipeItemComponent },
  { path: 'breakfast', component: RecipesContentComponent, data: {category: 'breakfast'} },
  { path: 'breakfast/:id', component: RecipeItemComponent },
  { path: 'baking', component: RecipesContentComponent, data: {category: 'baking'} },
  { path: 'baking/:id', component: RecipeItemComponent },
  { path: 'desserts', component: RecipesContentComponent, data: {category: 'desserts'} },
  { path: 'desserts/:id', component: RecipeItemComponent },
  { path: 'dinner', component: RecipesContentComponent, data: {category: 'dinner'} },
  { path: 'dinner/:id', component: RecipeItemComponent },
  { path: 'drinks', component: RecipesContentComponent, data: {category: 'drinks'} },
  { path: 'drinks/:id', component: RecipeItemComponent },
  { path: 'lunch', component: RecipesContentComponent, data: {category: 'lunch'} },
  { path: 'lunch/:id', component: RecipeItemComponent },
  { path: 'salads', component: RecipesContentComponent, data: {category: 'salads'} },
  { path: 'salads/:id', component: RecipeItemComponent },
  { path: 'snacks', component: RecipesContentComponent, data: {category: 'snacks'} },
  { path: 'snacks/:id', component: RecipeItemComponent },
  { path: 'soups', component: RecipesContentComponent, data: {category: 'soups'} },
  { path: 'soups/:id', component: RecipeItemComponent },
  { path: 'vegetarian', component: RecipesContentComponent, data: {category: 'vegetarian'} },
  { path: 'vegetarian/:id', component: RecipeItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    TruncatePipe,
    RecipesContentComponent,
    RecipeItemComponent,
    SearchComponent,
    RecipeModalComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MediaMatcher, RecipesService],
  entryComponents: [RecipeModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
