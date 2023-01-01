import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  private Lang = new BehaviorSubject('');
  LangObs = this.Lang.asObservable()
  constructor() {
  }
  LanguageChange(data: any) {
    this.Lang.next(data);
  }
}