import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { SzefComponent } from './szef.component';
import { SzefaddComponent } from './szefadd/szefadd.component';

@NgModule({
  imports: [SharedModule],
  declarations: [SzefComponent, SzefaddComponent]
})
export class SzefModule { }
