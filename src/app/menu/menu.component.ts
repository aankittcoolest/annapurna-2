import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-categories';

class Item{
  itemId: string
  name: string
  isSelected: boolean
  imageUrl: string

  constructor(itemId, name, isSelected, imageUrl) {
    this.itemId=itemId
    this.name = name
    this.isSelected = isSelected
    this.imageUrl = imageUrl
  }
}

  class Category {

    categoryId:string
    categoryName:string
    items:Item[]

    constructor(categoryId, categoryName, items) {
      this.categoryId = categoryId
      this.categoryName = categoryName
      this.items = items

    }

  }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems = CATEGORIES

    currentMenuItems: Object[]



  currenCategoryId: String

  constructor() { }

  ngOnInit() {
    this.currentMenuItems = this.menuItems
  }


  updateCurrentCategory(categoryId) {
    if(categoryId === 0) {
      return this.currentMenuItems = this.menuItems
    }
    this.currenCategoryId = categoryId
    this.currentMenuItems = this.menuItems.filter(category => category.categoryId === categoryId)
  }

}
