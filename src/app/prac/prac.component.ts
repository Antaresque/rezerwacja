import { RezerwacjeService } from './../_core/rezerwacje/rezerwacje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {

  dane: any = [];
  error: string;
  noresults = false;

  constructor(private rezerw: RezerwacjeService) { }

  ngOnInit() {
    this.refresh();
  }

  accept(id){
    this.rezerw.accept(id).subscribe(
      res => {
        if('message' in res){
          this.error = res['message'];
        }
        else{
          this.error = 'Zaakceptowano rezerwację';
        }
        console.log(res);
        this.refresh();
      }
    )
  }
  delete(id){
    this.rezerw.delete(id).subscribe(
      res => {
        if('message' in res){
          this.error = res['message'];
        }
        else{
          this.error = 'Odrzucono rezerwację';
        }
        console.log(res);
        this.refresh();
      }
    )
  }
  refresh(){
    this.rezerw.niezatwierdzone().subscribe(
      res => {
        if('message' in res){
          this.error = res['message'];
          this.noresults = true;
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
