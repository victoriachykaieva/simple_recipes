import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category;
  @Input() nameFilter;
  @Output() onSelectCategory = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  selectCategory(category) {
    this.onSelectCategory.emit(category);
  }

}
