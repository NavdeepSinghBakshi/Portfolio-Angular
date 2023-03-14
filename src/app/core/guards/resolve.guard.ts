import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkService } from 'src/app/common/services/work.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  data : any
  constructor(private _workService : WorkService){
    
  }
  resolve() {
      this._workService.getSkills().subscribe((result => {this.data=result}));
      return this.data;
  }
  
}