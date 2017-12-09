import { Injectable } from '@angular/core';
import { User } from './user.class';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private jwt: string;
  isLoggedIn: boolean;
  headers: Headers;

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
    return this.http.post('http://localhost/angular/php/user_login.php', user, {headers: this.headers});
  }

  /**
   * Send POST request to server to create new user.
   *
   * @param {User} user JSON array with user data (User class).
   */
  insert(user) {
    return this.http.post('http://localhost/angular/php/user_register.php', user, {headers: this.headers});
  }

  /**
   * Send POST request to server to delete a user. (admin or own account)
   *
   * @param {int} id ID of user.
   *
   */
  delete(id) {
    return this.http.post('http://localhost/angular/php/user_delete.php',  {id: id}, {headers: this.headers});
  }


  /**
   * Get all non-confidental data about user thro POST request from database.
   *
   * @param {int} id ID of user.
   */
  data(id){
    return this.http.post('http://localhost/angular/php/user_data.php', {id: id, type: 'free'}, {headers: this.headers});
  }

  /** Get data about currently logged user thro POST request from database.
   *
   */
  data_user(){
    let payload = this.getPayload();
    return this.http.post('http://localhost/angular/php/user_data.php', {id: payload.id}, {headers: this.headers});
  }
  /**
   * Get data for buyer (like bank account) about user thro POST request from database.
   * (need token authorization)
   *
   * @param {int} id ID of user.
   */
  dataPublic(id){
    return this.http.post('http://localhost/angular/php/user_data.php', {id: id, type: 'public'}, {headers: this.headers});
  }

  /**
   * Get data about owner of account thro POST request from database.
   * (need token authorization)
   */
  dataPrivate(id){
    return this.http.post('http://localhost/angular/php/user_data.php', {id: id, type: 'private'}, {headers: this.headers});
  }

  /**
   * Change data about owner of account thro POST request from database.
   * (need token authorization)
   *
   * @param {JSON} model Data to change - key equals column name in database (need ID of user).
   */
  changeData(model){
    return this.http.post('http://localhost/angular/php/user_change.php', model, {headers: this.headers});
  }

  /**
   * Upload avatar of user thro POST request.
   * (need token authorization)
   *
   * @param {FormData} formData Image uploaded by website.
   */
  uploadAvatar(formData){
    return this.http.post('http://localhost/angular/php/user_avatar.php', formData, {headers: this.headers});
  }

  search_name(nazwa){
    return this.http.post('http://localhost/angular/php/user_search_name.php', {nazwa: nazwa}, {headers: this.headers});
  }

  obs_add(id_og){
    return this.http.post('http://localhost/angular/php/obserwowane_add.php', {id_og: id_og}, {headers: this.headers});
  }

  obs_select(){
    return this.http.post('http://localhost/angular/php/obserwowane_select.php', {type: 'id'}, {headers: this.headers});
  }

  obs_select_detailed(){
    return this.http.post('http://localhost/angular/php/obserwowane_select.php', {type: 'detailed'}, {headers: this.headers});
  }

  obs_delete(id_og){
    return this.http.post('http://localhost/angular/php/obserwowane_delete.php', {id_og: id_og}, {headers: this.headers});
  }
}
