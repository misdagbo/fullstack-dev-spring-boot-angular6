import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HarcodedAuthentificationService } from './harcoded-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private harcodedAuthentificationService: HarcodedAuthentificationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.harcodedAuthentificationService.isUserLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;
  }
}
