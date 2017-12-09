import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private jwt: string;
  isLoggedIn: boolean;
  headers: Headers;
  api_link = 'http://localhost/angular-rezerwacja/php/api.php/';

  constructor(private http: Http) {
    this.jwt = localStorage.getItem('token');
    this.isLoggedIn = this.checkLoggedIn();

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    if(this.isLoggedIn) this.headers.append("Authorization", "Bearer " + this.jwt);
  }

  /**
   * Update value of boolean
   */
  checkLoggedIn() {
    return (this.jwt != null);
  }

  /**
   *  Update service boolean value based on JWT token and return its value.
   */
  getLoggedIn(){
    this.isLoggedIn = this.checkLoggedIn();
    return this.isLoggedIn;
  }

  /**
   * Save JWT token from server to localStorage.
   *
   * @param {string} jwt_temp  JWT token given from server.
   */
  setJWT(jwt_temp) { // po zalogowaniu chyba
    localStorage.setItem('token', jwt_temp);
    this.jwt = jwt_temp;
    this.headers.append("Authorization", "Bearer " + this.jwt);
    this.isLoggedIn = this.checkLoggedIn();
  }
  /**
   * Read data (payload) of JWT token.
   */
  getPayload() {
    const base64Url = this.jwt.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  /**
   * Destroy token and log out user.
   */
  logout() {
    localStorage.removeItem('token');
    this.jwt = null;
    this.headers.delete("Autorization");
    this.isLoggedIn = false;
  }

  // POST requests below

  /**
   * Send POST request to server to authorizate user.
   * Returns login_request (boolean) and jwt (string) if previous variable was true.
   *
   * @param {JSON} user JSON array with login and password.
   */
  login(user) {
    return this.http.post(this.api_link + 'auth/login', user, {headers: this.headers}).map(
      res =>
        //console.log(res); //<- do testów
        res.json());
  }

  /**
   * Send POST request to server to create new user.
   *
   * @param {JSON} user JSON array with user data.
   */
  register(user) {
    return this.http.post(this.api_link + 'auth/register', user, {headers: this.headers}).map(res => res.json());
  }

  /** Get data about currently logged user thro POST request from database.
   *
   */
  data_user(){
    let payload = this.getPayload();
    return this.http.post(this.api_link + 'auth/mydata', {id: payload.id}, {headers: this.headers}).map(res => res.json()));
  }
}
