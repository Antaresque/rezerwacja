import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';

@Component({
  selector: 'app-calendar-home',
  templateUrl: './calendar-home.component.html',
  styleUrls: ['./calendar-home.component.css']
})
export class CalendarHomeComponent implements OnInit {

  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  clickedDate: Date;
  selectedMonthViewDay: CalendarMonthViewDay;

  constructor() { }

  ngOnInit() {
  }

  dayClicked(day: CalendarMonthViewDay): void {
    this.clickedDate = day.date;
    if(this.selectedMonthViewDay) {
      delete this.selectedMonthViewDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedMonthViewDay = day;
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
