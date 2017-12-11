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
  addpok(model){
    this.pok.insert(model).subscribe(
      res => {
        if('message' in res){
          this.errorpok = res['message'];
        }
        this.getpok();
      }
    );
  }
  changepok(model){
    this.pok.change(model).subscribe(
      res => {
        if('message' in res){
          this.errorpok = res['message'];
        }
        this.getpok();
      }
    );
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
  addprac(model){
    this.prac.insert(model).subscribe(
      res => {
        if('message' in res){
          this.errorprac = res['message'];
        }
        this.getprac();
      }
    );
  }
  changeprac(model){
    this.prac.change(model).subscribe(
      res => {
        if('message' in res){
          this.errorprac = res['message'];
        }
        this.getprac();
      }
    );
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
