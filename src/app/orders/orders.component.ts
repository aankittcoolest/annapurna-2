import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders =
    [
      {'orderId': 1, 'name': '1st order'},
      {'orderId': 2, 'name': '2nd order'},
      {'orderId': 3, 'name': '3rd order'},
      {'orderId': 4, 'name': '4th order'}
    ]

  latestOrder = this.orders[0]

  constructor(router: Router) { }

  ngOnInit() {
    this.orders.splice(0,1)
  }

  showDetails() {
  }

}