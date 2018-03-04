import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-categories'
import { Category } from '../category'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  showEdit: boolean = false
  displayText: string = 'Edit'
  showConfirm: boolean = false
  showProcessOrder: boolean = false

  menuItems = CATEGORIES

  currentMenuItems: any

  currentCategoryId: number

  confirmedMenuItems = []

  showHideFilter: boolean

  confirmedItemsCount: string='0'

  isCreateOrder:boolean = true

  constructor() {

  }

  ngOnInit() {
    this.currentMenuItems = this.menuItems
  }


  updateCurrentCategory(categoryId) {
    this.currentCategoryId = categoryId
    console.log(this.currentCategoryId)
    if (this.showEdit) {
      if (categoryId === 0) {
        return this.currentMenuItems = this.confirmedMenuItems
      }
      this.currentMenuItems = this.confirmedMenuItems.filter(category => category.categoryId == categoryId)
    } else {
      if (categoryId === 0) {
        return this.currentMenuItems = this.menuItems
      }
      this.currentMenuItems = this.menuItems.filter(category => category.categoryId == categoryId)

    }
  }

  toggleConfirmButton(countItems) {
    this.showConfirm = countItems > 0 ? true : false
    console.log(countItems)
    this.confirmedItemsCount = countItems
  }

  toggleProcessOrderButton() {
    this.showEdit = true
    this.showConfirm = false
    this.showProcessOrder = true

    this.populateConfirmedItems()

  }

  populateConfirmedItems() {
    let tmpCategory: Category
    let tmpItems = [];
    this.currentMenuItems.forEach(category => {
      category.items.forEach(item => {
        if (item.isSelected == true) {
          tmpItems.push(item)
        }
      })

      if (tmpItems.length > 0) {
        tmpCategory = new Category(category.categoryId, category.categoryName, tmpItems)
        this.confirmedMenuItems.push(tmpCategory)
      }
      tmpItems = []
    });

    this.currentMenuItems = this.confirmedMenuItems
  }

  toggleEdit() {
    this.showEdit = false
    this.showConfirm = true
    this.showProcessOrder = false
    this.currentMenuItems = this.menuItems
    this.confirmedMenuItems = []
  }

  toggleFilter(e) {
    console.log(e)
    this.showHideFilter = e
  }

}
