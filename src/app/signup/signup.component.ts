import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isToVerify: boolean = false
  isVerified: boolean = false

  @Output()
  isShow = new EventEmitter<boolean>()

  getCloseStatus = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * 1. Generate otp
   * 2. Verify user exist. If user exist display error message
   * 2. Save email to DB
   * 3. Send emial
   * 4. Forward to email verification page
   */
  sendToVerify() {
    this.isToVerify = true
  }

  /**
   * 1. Validate otp with the entered code
   * 2. If verified forward to password generation page
   * 3. 
   */
  validateVerification() {
    this.isVerified = true
  }

  /**
   * 1. Generate otp
   * 2. update otp to database
   * 3. Send email again
   * 4. Forward to email verification page
   */
  resendVerification() {

  }

  signUpAndLogin() {
    this.closeModal()
    this.router.navigate(['loggedIn'])

  }

  closeModal() {
    this.isShow.emit(false)
  }

}
