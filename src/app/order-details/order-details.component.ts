import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderId: string

  //populate Order
  constructor( activatedRoute:ActivatedRoute) {
    this.orderId = activatedRoute.snapshot.params['id']
   }

  ngOnInit() {
  }

  editOrder() {

  }

  deleteOrder() {

  }

  updateOrder() {

  }

}
