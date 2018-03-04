import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  isCreateOrder

  @Input()
  menuItems

  @Input()
  isEditable

  @Input()
  confirmedItemsCount:number

  @Output()
  showConfirm = new EventEmitter<number>()

  itemId: String
  showItemDetails: boolean = false

  totalItems: number = 0

  constructor() { }

  ngOnInit() {
  }


  showDetails(itemId: string) {
    this.itemId = itemId
    this.showItemDetails = true
  }

  toggleDetails(closeModal) {
    this.showItemDetails = closeModal
    this.toggleSelectableCard(this.itemId)
  }

  toggleSelectableCard(itemId) {
    let selectedItem = this.menuItems.forEach(item => {
      if(item.itemId === itemId) {
        item.isSelected = !item.isSelected
        this.totalItems = item.isSelected ? ++this.confirmedItemsCount : --this.confirmedItemsCount
        this.showConfirm.emit(this.confirmedItemsCount)
      }
    })
    
  }
}
