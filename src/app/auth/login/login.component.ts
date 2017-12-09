import { Location } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoggedIn: boolean;
  wrongPassword = false;
  redirect = true;
  loading = false;
  model: any = {};
  error: any;
  register: boolean;

  constructor(public user: UserService, private router: Router, private route: ActivatedRoute, private location: Location) {
    this.route.queryParams.subscribe(
      params => {
        this.redirect = params['redirect'] || true;
        this.register = params['register'] || false;
      })
  }

  ngOnInit(){
  }

  loginEvent() {
    this.loading = true;
    this.user.login(this.model).subscribe(
      res => {
        if('message' in res) {
          this.error = res['message'];
          this.isLoggedIn = false;
          this.model = {};
          this.loading = false;
          this.register = false;
        }
        else  {
          this.isLoggedIn = res['result'];
          this.model = {};
          this.error = null;
          this.loading = false;
          this.register = false;

          this.user.setJWT(res['jwt']);
          if(this.redirect) this.location.back();
          else this.router.navigate(['/']);
        }
      },
      err => {
        this.model = {};
        console.log(err['_body']);
        this.loading = false;
        this.register = false;
      });
  }
}
