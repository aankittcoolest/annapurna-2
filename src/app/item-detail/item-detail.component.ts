import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input()
  itemDetailsId: string

  @Output()
  details = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.details.emit(false)
  }

}
