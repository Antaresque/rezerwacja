import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent, AuthComponent]
})
export class AuthModule { }
