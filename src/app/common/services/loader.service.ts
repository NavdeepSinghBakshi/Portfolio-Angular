import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  // isLoading = new Subject<boolean>();
  public isLoading = new BehaviorSubject(false);
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }

}