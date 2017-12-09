import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { PracComponent } from './prac.component';

@NgModule({
  imports: [SharedModule],
  declarations: [PracComponent]
})
export class PracModule { }
