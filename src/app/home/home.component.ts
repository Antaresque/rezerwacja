import { PokojeService } from './../_core/pokoje/pokoje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dane: any = [];
  date: Date = new Date();
  error: string = null;

  constructor(private pokoje: PokojeService) { }

  ngOnInit() {
    this.pokoje.get().subscribe(
      res =>  {
        if('message' in res) {
          this.error = res['message'];
        }
        else this.dane = res;
      });
  }

  onDateChange(date: Date){
    this.date = date;
  }
}
