import { UserService } from './../../_core/user/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  tresc: string;
  funkcja: string;
  logged: boolean;

  constructor(private user: UserService) {
    this.logged = tokenNotExpired();
    this.user.logged$.subscribe(
      (value: boolean) => {
        this.logged = value;
        this.loginHeader();
      }
    )
  }

  ngOnInit() {
    this.loginHeader();
  }

  loginHeader(){
    if(this.logged) {
      this.funkcja = this.user.getPayload().funkcja;
      if(this.funkcja == 'klient')
        this.user.data_user().subscribe(res => this.tresc = res.imie + ' ' + res.nazwisko);
      else if(this.funkcja == 'pracownik')
        this.tresc = 'pracowniku';
      else if(this.funkcja == 'szef'){
        this.tresc = 'szefie';
      }
    }
  }

  logout() {
    this.user.logout();
  }
}
