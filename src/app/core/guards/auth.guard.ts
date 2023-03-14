import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShareService } from 'src/app/common/services/share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: any;
  login: boolean = false;
  constructor(private _shareService: ShareService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._shareService.userObs.subscribe((result => {
      this.user = result;
      this.login = this.user.login;
    }))
    if (this.login == true)
    {
      this.login = false;
      return true;
    }
    return true;
    this.router.navigate(['/login']);
    alert("Please login for access")
  }

}