import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import
import {CoreModule} from './core/core.module'
import {FormsModule} from '@angular/forms'

//import component :
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginFormComponent } from './component/forms/login-form/login-form.component';
import { LoginPageComponent } from './views/auth/login-page/login-page.component';
import { ButtonComponent } from './component/utils/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginFormComponent,
    LoginPageComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
