import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PracownicyService {

  private API_LINK = 'http://localhost/angular-rezerwacja/php/api.php/';

  constructor(private http: Http, private ahttp: AuthHttp) {}

  /*
   * gets data idk
   */
  get() {
    return this.ahttp.get(this.API_LINK + 'pracownicy').map(res => res.json());
  }

  insert(model){
    return this.ahttp.post(this.API_LINK + 'pracownicy/insert', model).map(res => res.json());
  }

  change(model){
    return this.ahttp.post(this.API_LINK + 'pracownicy/change', model).map(res => res.json());
  }
  delete(id){
    return this.ahttp.post(this.API_LINK + 'pracownicy/delete', {id: id}).map(res => res.json());
  }
}
