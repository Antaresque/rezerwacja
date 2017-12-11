import { Router } from '@angular/router';
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

  constructor(private pok: PokojeService, private prac: PracownicyService, private router: Router) { }

  ngOnInit() {
    this.getpok();
    this.getprac();
  }


  //pokoje

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
  addpok(){
    this.router.navigate(['/szef/add'], {queryParams: {param: 'pokoje'}});
  }

  deletepok(id){
    if(confirm('Czy na pewno chcesz usunąć ten pokój?')){
      this.pok.delete(id).subscribe(
        res => {
          if('message' in res){
            this.errorpok = res['message'];
          }
          this.getpok();
        }
      );
    }
  }

  //pracownicy
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
  addprac(){
    this.router.navigate(['/szef/add'], {queryParams: {param: 'pracownicy'}});
  }

  deleteprac(id){
    if(confirm('Czy na pewno chcesz usunąć tego pracownika?')){
      this.prac.delete(id).subscribe(
        res => {
          if('message' in res){
            this.errorprac = res['message'];
          }
          this.getprac();
        }
      );
    }
  }


}
