import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(val:any,containerId:any){
    let el = document.createElement('div');
    el.innerHTML= val;
    el.style.color='blue';
    document.getElementById(containerId)?.prepend(el);
  }
}