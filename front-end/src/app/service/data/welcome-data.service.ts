import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from 'src/app/app.constants';


export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private _http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this._http.get<HelloWorldBean>(`${URL_API}/hello-world-bean`);
    // console.log('Execute Hello World Bean Service');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // });
    // return this._http.get<HelloWorldBean>(`http://localhost:8090/hello-world/path-variable/${name}`, {headers : header});
    return this._http.get<HelloWorldBean>(`${URL_API}/hello-world/path-variable/${name}`);
    // console.log('Execute Hello World Bean Service');
  }


  // createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
