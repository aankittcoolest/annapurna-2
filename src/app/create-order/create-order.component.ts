import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  showEdit:boolean = false
  displayText:string = 'Edit'
  showConfirm:boolean = false
  showProcessOrder: boolean = false

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

    currentMenuItems: any

  currentCategoryId: number

  confirmedItems
 
  constructor() { 
    
  }

  ngOnInit() {
    this.currentMenuItems = this.menuItems
  }


  updateCurrentCategory(categoryId) {
    if(categoryId === 0) {
      return this.currentMenuItems = this.menuItems
    }
    this.currentCategoryId = categoryId
    this.currentMenuItems = this.menuItems.filter(category => category.categoryId === categoryId)
  }

  toggleConfirmButton(countItems) {
    this.showConfirm = countItems > 0 ? true : false
  }

  toggleProcessOrderButton() {
    this.showEdit = true
    this.showConfirm = false
    this.showProcessOrder = true


  }

  toggleEdit() {
    this.showEdit = false
    this.showConfirm = true
    this.showProcessOrder = false
    this.confirmedItems = null
    console.log("ok")
  }


}
