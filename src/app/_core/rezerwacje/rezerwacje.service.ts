import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { AuthHttp, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RezerwacjeService {

  private API_LINK = 'http://localhost/angular-rezerwacja/php/api.php/';

  constructor(private http: Http, private ahttp: AuthHttp) {}

  sprawdz(model){
    return this.http.post(this.API_LINK + 'rezerwacje/sprawdz', model).map(res => res.json());
  }

  zarezerwuj(model){
    return this.ahttp.post(this.API_LINK + 'rezerwacje/insert', model).map(res => res.json());
  }

  niezatwierdzone(){
    return this.ahttp.get(this.API_LINK + 'rezerwacje/niezatwierdzone').map(res => res.json());
  }

  mojerezerw(){
    return this.ahttp.get(this.API_LINK + 'rezerwacje/mojerezerw').map(res => res.json());
  }

  accept(id){
    return this.ahttp.post(this.API_LINK + 'rezerwacje/accept', {id: id}).map(res => res.json());
  }

  delete(id){
    return this.ahttp.post(this.API_LINK + 'rezerwacje/delete', {id: id}).map(res => res.json());
  }
}
