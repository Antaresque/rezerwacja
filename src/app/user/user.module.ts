import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';

@NgModule({
  imports: [SharedModule],
  declarations: [UserComponent]
})
export class UserModule { }
