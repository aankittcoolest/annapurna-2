import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  menuItems

  itemId: String
  showItemDetails: boolean = false

  constructor() { }

  ngOnInit() {
  }


  showDetails(itemId: string) {
    this.itemId = itemId
    this.showItemDetails = true
  }

  toggleDetails(closeModal) {
    console.log("ok")
    this.showItemDetails = closeModal
  }

  toggleSelectableCard(itemId) {
    let selectedItem = this.menuItems.forEach(item => {
      if(item.itemId === itemId) {
        item.isSelected = !item.isSelected
      }
    })
    
  
    console.log(selectedItem)
    console.log(this.menuItems)
  }

}
