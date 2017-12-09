import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { PokojComponent } from './pokoj.component';

@NgModule({
  imports: [SharedModule],
  declarations: [PokojComponent]
})
export class PokojModule { }
