import { RezerwacjeService } from './../_core/rezerwacje/rezerwacje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dane: any = [];
  error: string;
  noresults = false;

  constructor(private rezerw: RezerwacjeService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.rezerw.mojerezerw().subscribe(
      res => {
        if('message' in res){
          this.error = res['message'];
        }
        else{
          this.dane = res;
          if(this.dane.length == 0) this.noresults = true;
          else this.noresults = false;
        }
        console.log(res);
      }
    );
  }
}
