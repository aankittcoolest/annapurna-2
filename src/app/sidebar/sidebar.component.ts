import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  openSideBar:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.openSideBar  = !this.openSideBar;
    console.log("ok");
  }

}
