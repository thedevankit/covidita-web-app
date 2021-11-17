import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  suggestList = [
    "Paneer tikka masala",
    "Paneer cheese",
    "Kaju Biriyani",
    "Pasta",
    "Cheese Pizza",
    "Kadai Khorma"
  ];
  searchModel:any;
  products = new Array(6);
  constructor() { }

  ngOnInit(): void {
  }

  suggestClick(suggest){
    this.searchModel = suggest;
  }

}
