import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokojeService {

  private headers: Headers;
  private API_LINK = 'http://localhost/angular-rezerwacja/php/api.php/';

  public date = new Subject<Date>();
  emitDate(date_val){
    this.date.next(date_val);
  }

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'text/plain');
  }

  /*
   * gets data idk
   */
  get() {
    return this.http.get(this.API_LINK + 'pokoje', {headers: this.headers})
      .map(res => res.json());
  }

  wolnepokoje(date){
    return this.http.post(this.API_LINK + 'pokoje/wolnepokoje', {date: date}, {headers: this.headers}).map(res => res.json());
  }
}
