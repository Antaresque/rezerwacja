import { PracownicyService } from './../_core/pracownicy/pracownicy.service';
import { PokojeService } from './../_core/pokoje/pokoje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-szef',
  templateUrl: './szef.component.html',
  styleUrls: ['./szef.component.css']
})
export class SzefComponent implements OnInit {

  danepokoje = [];
  danepracownicy = [];

  errorpok = null;
  errorprac = null;

  constructor(private pok: PokojeService, private prac: PracownicyService) { }

  ngOnInit() {
    this.getpok();
    this.getprac();
  }

  getpok(){
    this.pok.get().subscribe(
      res => {
        if('message' in res){
          this.errorpok = res['message'];
        }
        else{
          this.danepokoje = res;
        }
      }
    )
  }

  getprac(){
    this.prac.get().subscribe(
      res => {
        if('message' in res){
          this.errorprac = res['message'];
        }
        else{
          this.danepracownicy = res;
        }
      }
    )
  }
}
