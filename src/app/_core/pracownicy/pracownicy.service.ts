import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PracownicyService {

  headers: Headers;
  api_link = 'http://localhost/angular-rezerwacja/php/api.php/';

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'text/plain');
  }

  /*
   * gets data idk
   */
  get() {
    return this.http.get(this.api_link + 'pracownicy', {headers: this.headers}).map(res => res.json());
  }

}
