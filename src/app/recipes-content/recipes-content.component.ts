import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-content',
  templateUrl: './recipes-content.component.html',
  styleUrls: ['./recipes-content.component.css']
})
export class RecipesContentComponent implements OnInit {
  @Input() currRecipe;
  
  constructor() { }

  ngOnInit() {
  }

}
