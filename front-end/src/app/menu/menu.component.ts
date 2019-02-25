import { Component, OnInit } from '@angular/core';
import { HarcodedAuthentificationService } from '../service/harcoded-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn = false;
  constructor(private harcodedAuthentificationService: HarcodedAuthentificationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.harcodedAuthentificationService.isUserLoggedIn();
  }

}
