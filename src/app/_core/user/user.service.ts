import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { AuthHttp, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private API_LINK = 'http://localhost/angular-rezerwacja/php/api.php/';

  jwtHelper: JwtHelper = new JwtHelper();

  logged$: Observable<boolean>;
  public loggedSubject = new Subject<boolean>();

  constructor(private http: Http, private ahttp: AuthHttp) {
    this.logged$ = this.loggedSubject.asObservable();
    this.logged = tokenNotExpired();
  }

  /**
   *  Update service boolean value based on JWT token and return its value.
   */
  set logged(value){
    console.log(value);
    this.loggedSubject.next(value);
  }

  get logged(){
    return tokenNotExpired();
  }
  /**
   * Save JWT token from server to localStorage.
   *
   * @param {string} jwt_temp  JWT token given from server.
   */
  setJWT(jwt_temp) { // po zalogowaniu chyba
    localStorage.setItem('token', jwt_temp);
    this.logged = tokenNotExpired();
  }

  /**
   * Destroy token and log out user.
   */
  logout() {
    localStorage.removeItem('token');
    this.logged = false;
  }

  // POST requests below

  /**
   * Send POST request to server to authorizate user.
   * Returns login_request (boolean) and jwt (string) if previous variable was true.
   *
   * @param {JSON} user JSON array with login and password.
   */
  login(user) {
    return this.http.post(this.API_LINK + 'auth/login', user).map(
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
    return this.http.post(this.API_LINK + 'auth/register', user).map(res => res.json());
  }

  /** Get data about currently logged user thro POST request from database.
   *
   */
  data_user(){
    let token = localStorage.getItem('token');
    let payload = this.jwtHelper.decodeToken(token);
    return this.ahttp.post(this.API_LINK + 'auth/mydata', {id: payload.id}).map(res => res.json());
  }
}
