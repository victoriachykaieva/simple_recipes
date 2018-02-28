import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onChangeNameFilter = new EventEmitter<String>();
  nameFilter: String;
  constructor() { }

  ngOnInit() {
  }

  changeFilter(filter) {
    this.onChangeNameFilter.emit(filter);
  }

  clearFilter() {
    this.nameFilter = '';
    this.onChangeNameFilter.emit(this.nameFilter);
  }

}
