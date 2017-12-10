import { PokojeService } from './../../_core/pokoje/pokoje.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokoje-lista',
  templateUrl: './pokoje-lista.component.html',
  styleUrls: ['./pokoje-lista.component.css']
})
export class PokojeListaComponent implements OnInit {

  Arr = Array;
  date: Date = new Date();
  dane: any;
  error: string = null;
  page: number = 1;
  num: number = 10;

  pages: number;

  constructor(private pokoje: PokojeService) {
    this.pokoje.date.subscribe(
      value => {
        this.date = value;
        this.checkFreeRooms();
    })
   }

  ngOnInit() {
    this.checkFreeRoomsPage();
  }

  checkFreeRooms(){
    this.pokoje.wolnepokoje(this.date).subscribe(
      res => {
        if('message' in res){
          this.error = res['message'];
        }
        else{
          this.error = null;
          this.dane = res;
        }
        console.log(res);
      }
    );
  }

  checkFreeRoomsPage(){
    const model = {date: this.date, page: this.page, num: this.num}
    this.pokoje.wolnepokojepage(model).subscribe(
      res => {
        if('message' in res){
          this.error = res['message'];
        }
        else{
          this.error = null;
          this.pages = res.pop();
          if(this.pages < 2) this.pages = null;
          this.dane = res;
        }
        console.log(res);
      }
    );
  }

  pageChange(event){
    this.page = event;
    this.checkFreeRoomsPage();
  }
  numChange(event){
    this.num = event;
    this.checkFreeRoomsPage();
  }
  numChangeAll(){
    this.checkFreeRooms();
    this.pages = null;
    this.num = null;
  }
}
