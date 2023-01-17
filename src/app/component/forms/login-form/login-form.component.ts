import { Component, Output, EventEmitter } from '@angular/core';
import { AuthRequest } from 'src/app/core/interface/auth-request';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginEmail: string = '';
  loginPassword: string = '';

  @Output() authEmitter: EventEmitter<AuthRequest> = new EventEmitter();

  public onSubmit():void {
    console.log("onSubmit");
    const authRequest: AuthRequest = {
      "email" : this.loginEmail,
      "password" : this.loginPassword
    }
    console.log(authRequest);
    this.authEmitter.emit(authRequest)
  }
}
