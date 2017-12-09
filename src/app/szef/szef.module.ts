import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { SzefComponent } from './szef.component';

@NgModule({
  imports: [SharedModule],
  declarations: [SzefComponent]
})
export class SzefModule { }
