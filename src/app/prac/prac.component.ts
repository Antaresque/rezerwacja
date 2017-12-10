import { RezerwacjeService } from './../_core/rezerwacje/rezerwacje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {

  dane: {};
  error: string;

  constructor(private rezerw: RezerwacjeService) { }

  ngOnInit() {
    this.rezerw.niezatwierdzone().subscribe(
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

  accept(id){
    this.rezerw.accept(id).subscribe(
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
    )
  }
  delete(id){
    this.rezerw.delete(id).subscribe(
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
    )
  }
  refresh(){
    this.rezerw.niezatwierdzone().subscribe(
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
