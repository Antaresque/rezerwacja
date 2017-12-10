import { NgModule } from '@angular/core';
import { SharedModule } from './../_shared/shared.module';

// components
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ]
})
export class AuthModule {

}
