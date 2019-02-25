import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthentificationService } from '../basic-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAhtentication: BasicAuthentificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'in28minutes';
    // let password = 'dummy';
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAhtentication.getAuthenticatedToken();
    let username = this.basicAhtentication.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
