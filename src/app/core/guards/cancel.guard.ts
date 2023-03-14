import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

export interface CanComponentLeave{
  canLeave:()=>boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CancelGuard implements CanDeactivate<CanComponentLeave> {
  constructor(){}
  canDeactivate(
    component: CanComponentLeave):boolean {
      if(component.canLeave)
      {
        return component.canLeave();
      }
    return true;
  }
  
}