import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogin: boolean = false

  showSignUp: boolean = false

  @Input()
  isLoggedIn: boolean


  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
    this.showLogin = !this.showLogin

  }

  toggleSignUp() {
    this.showSignUp = !this.showSignUp
  }

  closeModal(close) {
    console.log(close)
    this.showSignUp = close

  }

}
