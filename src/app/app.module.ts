import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MediaMatcher} from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HighlightPipe } from './highlight.pipe';
import { RecipesContentComponent } from './recipes-content/recipes-content.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { SearchComponent } from './search/search.component';
import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    RecipesContentComponent,
    RecipeItemComponent,
    SearchComponent,
    RecipeModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MediaMatcher],
  entryComponents: [RecipeModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
