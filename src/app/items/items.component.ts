import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  menuItems

  @Input()
  isEditable

  @Output()
  showConfirm = new EventEmitter<Boolean>()

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
        this.totalItems = item.isSelected ? ++this.totalItems : --this.totalItems
        if(this.totalItems > 0) {
          this.showConfirm.emit(true)
        }else {
          this.showConfirm.emit(false)

        }
      
      }
    })
    
  }

}
