import { AuthRequest } from './../../../core/interface/auth-request';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private authService: AuthService){}

  login(authRequest: AuthRequest){
    console.log("login() --- login page");
    console.log(authRequest);
    this.authService.login(authRequest).subscribe((res)=>(console.log(res)
    ))
    console.log(this.authService.login(authRequest))

  }
}
