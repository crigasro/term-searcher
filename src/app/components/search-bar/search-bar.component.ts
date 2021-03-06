import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
  @Input() title: string = '';
  @Output() onSearch = new EventEmitter<string>();
  
  search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(
      value => this.onSearch.emit(value)
    );
  }

}
