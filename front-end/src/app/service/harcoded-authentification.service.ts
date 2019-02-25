import { Injectable } from '@angular/core';
import { AUTHENTICATE_USER } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthentificationService {

  constructor() { }


  authenticate(username: string, password: string) {
    // console.log('before : ', this.isUserLoggedIn());
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem(AUTHENTICATE_USER, username);
      // console.log('after : ', this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATE_USER);
    return !(user === null);
  }


  logout() {
    sessionStorage.removeItem(AUTHENTICATE_USER);
  }
}
