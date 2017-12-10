import { tokenNotExpired } from 'angular2-jwt';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KlientGuard implements CanActivate {

  constructor(public user: UserService, public router: Router) {}

  canActivate(): boolean {
    if(tokenNotExpired()){
      let funkcja = this.user.getPayload().funkcja;
      if(funkcja === 'klient'){
        return true;
      }
      else{
        this.router.navigate(['/']);
        return false;
      }
    }
    else {
      this.user.logout();
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
