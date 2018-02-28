import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Object[] = 
  [
    { 'categoryId' :0,  'name': 'All'},
    { 'categoryId' : 1, 'name': 'Pannerr'},
  { 'categoryId' : 2, 'name': 'stalls'},
  { 'categoryId' : 3, 'name': 'chaat'},
  { 'categoryId' : 4, 'name': 'deserts'},
  { 'categoryId' : 5, 'name': 'maincourse'},
]

@Output()
currentCategory = new EventEmitter<String>()

  constructor() { }

  ngOnInit() {
  }

  updateCategory(categoryId) {
    this.currentCategory.emit(categoryId)
  }

}
