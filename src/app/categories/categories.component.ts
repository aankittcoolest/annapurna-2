import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input()
  showHideFilterInput : boolean

  categories: Object[] =
    [
      { 'categoryId': 0, 'name': 'All' },
      { 'categoryId': 1, 'name': 'Pannerr' },
      { 'categoryId': 2, 'name': 'stalls' },
      { 'categoryId': 3, 'name': 'chaat' },
      { 'categoryId': 4, 'name': 'deserts' },
      { 'categoryId': 5, 'name': 'maincourse' },
    ]

  @Output()
  currentCategory = new EventEmitter<String>()

  currentCategoryId: string

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
    this.currentCategoryId = "0"
  }

  updateCategory(categoryId) {
    this.currentCategory.emit(categoryId)
    this.currentCategoryId = categoryId
    this.showHideFilterInput = false
  }

  onClick(event) {
    if(!this._eref.nativeElement.contains(event.target)) {
        this.showHideFilterInput = false
    }
  }

  toggleSideBar() {
    this.showHideFilterInput = !this.showHideFilterInput
   }
}
