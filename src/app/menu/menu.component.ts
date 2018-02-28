import { Component, OnInit } from '@angular/core';

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

  menuItems =
    [
      {
        categoryId: 1,
        categoryName: 'Paneer',
         items: [
          { itemId: 1, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 2, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 3, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 4, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 5, name: 'Samosa', isSelected: false, imageUrl: '' },
          new Item(1,'Samosa', false, '')
        ]
      },
      {
        categoryId: 2,
        categoryName: 'stalls',
         items: [
          { itemId: 6, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 7, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 8, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 9, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 10, name: 'Samosa', isSelected: false, imageUrl: '' },
        ]
      },
      {
        categoryId: 3,
        categoryName: 'chaat',
         items: [
          { itemId: 11, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 12, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 13, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 14, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 15, name: 'Samosa', isSelected: false, imageUrl: '' },
        ]
      },
      {
        categoryId: 4,
        categoryName: 'deserts',
         items: [
          { itemId: 16, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 17, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 18, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 19, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 20, name: 'Samosa', isSelected: false, imageUrl: '' },
        ]
      },
      {
        categoryId: 5,
        categoryName: 'maincourse',
         items: [
          { itemId: 1, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 2, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 3, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 4, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 5, name: 'Samosa', isSelected: false, imageUrl: '' },
        ]
      },
      {
        categoryId: 6,
        categoryName: 'stalls',
         items: [
          { itemId: 1, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 2, name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: 3, name: 'Samosa', isSelected: false, imageUrl: '' },
        ]
      },
    ]

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
