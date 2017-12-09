import { PokojeService } from './../../_core/pokoje/pokoje.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { DayViewHour } from 'calendar-utils';

@Component({
  selector: 'app-calendar-home',
  templateUrl: './calendar-home.component.html',
  styleUrls: ['./calendar-home.component.css']
})
export class CalendarHomeComponent implements OnInit {

  view: string = "month";
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  selectedMonthViewDay: CalendarMonthViewDay;
  selectedDate: Date = new Date();;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(private pokoje: PokojeService) { }

  ngOnInit() {
  }

  dayClicked(day: CalendarMonthViewDay): void {
    if(this.selectedMonthViewDay) {
      delete this.selectedMonthViewDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedMonthViewDay = day;
    this.selectedDate = day.date;
    this.pokoje.emitDate(this.selectedDate);
  }

  beforeViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if(this.selectedMonthViewDay && day.date.getTime() === this.selectedMonthViewDay.date.getTime()
        || this.selectedDate.toDateString() === day.date.toDateString()) {
          day.cssClass = 'cal-day-selected';
          this.selectedMonthViewDay = day;
      }
    });
  }

  clearSelect(){
    delete this.selectedMonthViewDay.cssClass;
    delete this.selectedMonthViewDay;
  }
}
