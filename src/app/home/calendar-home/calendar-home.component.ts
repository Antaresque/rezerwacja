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
  clickedDate: Date;
  selectedMonthViewDay: CalendarMonthViewDay;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  dayClicked(day: CalendarMonthViewDay): void {
    if(this.selectedMonthViewDay) {
      delete this.selectedMonthViewDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedMonthViewDay = day;

    this.dateChange.emit(day.date);
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (
        this.selectedMonthViewDay &&
        day.date.getTime() === this.selectedMonthViewDay.date.getTime()
      ) {
        day.cssClass = 'cal-day-selected';
        this.selectedMonthViewDay = day;
      }
    });
  }
}
