import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_API, AUTHENTICATE_USER, TOKEN } from '../app.constants';


export class AuthenticationBean {
  constructor(public message: string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class BasicAuthentificationService {

  constructor(private _http: HttpClient) { }

  executeAuhtenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this._http.get<AuthenticationBean>(`${URL_API}/basic-auth`, { headers: header }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATE_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
    // console.log('Execute Hello World Bean Service');
  }

  executeJwtAuhtenticationService(username, password) {
    return this._http.post<any>(`${URL_API}/authenticate`, { username, password }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATE_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
    // console.log('Execute Hello World Bean Service');
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATE_USER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser)
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATE_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATE_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
