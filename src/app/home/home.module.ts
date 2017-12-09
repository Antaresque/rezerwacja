import { CalendarModule } from 'angular-calendar';
import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { PokojeListaComponent } from './pokoje-lista/pokoje-lista.component';

@NgModule({
  imports: [SharedModule, CalendarModule],
  declarations: [HomeComponent, CalendarHomeComponent, PokojeListaComponent]
})
export class HomeModule { }
