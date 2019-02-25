import { Component, OnInit } from '@angular/core';
import { HarcodedAuthentificationService } from '../service/harcoded-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HarcodedAuthentificationService) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
