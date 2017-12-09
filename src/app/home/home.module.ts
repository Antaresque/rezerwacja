import { CalendarModule } from 'angular-calendar';
import { SharedModule } from './../_shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';

@NgModule({
  imports: [SharedModule, CalendarModule],
  declarations: [HomeComponent, CalendarHomeComponent]
})
export class HomeModule { }
