import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthentificationService } from '../service/harcoded-authentification.service';
import { BasicAuthentificationService } from '../service/basic-authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HarcodedAuthentificationService,
    private basicAuthService: BasicAuthentificationService) { }

  ngOnInit() {
  }


  handleLogin() {
    // console.log(this.username);
    // tslint:disable-next-line:quotemark
    // if (this.username === "in28minutes" && this.password === 'dummy') {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuhtenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }


  handleJwtAuthLogin() {
    this.basicAuthService.executeJwtAuhtenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
