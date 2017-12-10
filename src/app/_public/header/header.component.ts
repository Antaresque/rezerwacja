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

  data: any = {};
  logged: boolean;

  constructor(private user: UserService) {
    this.logged = tokenNotExpired();
    this.user.logged$.subscribe(
      (value: boolean) => {
        this.logged = value;
        if(this.logged) this.user.data_user().subscribe(res => this.data = res)
      }
    )
  }

  ngOnInit() {
    if(this.logged) this.user.data_user().subscribe(
      res => this.data = res
    )
  }

  logout() {
    this.user.logout();
  }
}
