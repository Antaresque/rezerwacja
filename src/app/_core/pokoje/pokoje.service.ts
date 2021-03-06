import { AuthHttp } from 'angular2-jwt';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokojeService {

  private API_LINK = 'http://localhost/angular-rezerwacja/php/api.php/';

  public date = new Subject<Date>();
  emitDate(date_val){
    this.date.next(date_val);
  }

  constructor(private http: Http, private ahttp: AuthHttp) {}

  /*
   * gets data idk
   */
  get() {
    return this.http.get(this.API_LINK + 'pokoje').map(res => res.json());
  }

  getbyID(id){
    return this.http.post(this.API_LINK + 'pokoje/getbyid', {id: id}).map(res => res.json());
  }

  /**
   * dodaje pokój
   * @param model (typ + cena)
   */
  insert(model){
    return this.ahttp.post(this.API_LINK + 'pokoje/insert', model).map(res => res.json());
  }
  /**
   * zmienia pokój
   * @param model (id + typ + cena)
   */
  change(model){
    return this.ahttp.post(this.API_LINK + 'pokoje/change', model).map(res => res.json());
  }

  delete(id){
    return this.ahttp.post(this.API_LINK + 'pokoje/delete', {id: id}).map(res => res.json());
  }

  wolnepokoje(date){
    return this.http.post(this.API_LINK + 'pokoje/wolnepokoje', {date: date}).map(res => res.json());
  }

  wolnepokojepage(model){
    return this.http.post(this.API_LINK + 'pokoje/wolnepokojepage', model).map(res => res.json());
  }
}
