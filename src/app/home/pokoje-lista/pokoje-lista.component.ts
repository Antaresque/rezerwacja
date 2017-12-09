import { PokojeService } from './../../_core/pokoje/pokoje.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokoje-lista',
  templateUrl: './pokoje-lista.component.html',
  styleUrls: ['./pokoje-lista.component.css']
})
export class PokojeListaComponent implements OnInit {

  date: Date = new Date();
  dane: any;
  error: string = null;

  constructor(private pokoje: PokojeService) {
    this.pokoje.date.subscribe(
      value => {
        this.date = value;
        this.checkFreeRooms();
    })
   }

  ngOnInit() {
    this.checkFreeRooms();
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
}
