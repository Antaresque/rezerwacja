import { UserService } from './../../_core/user/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  data: any = {};

  constructor(private user: UserService) {
  }

  get logged(): boolean{
    return this.user.isLoggedIn;
  }

  ngOnInit() {
    if(this.logged) this.user.data_user().subscribe(
      res => this.data = JSON.parse(res['_body'])
    )
  }

  logout() {
    this.user.logout();
  }
}
