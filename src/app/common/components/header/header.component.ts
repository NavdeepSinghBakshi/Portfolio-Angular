import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _languageService: LanguageService, public translate: TranslateService) { }

  ngOnInit(): void {
  }
  onChangeLanguage(language: any) {
    this._languageService.LanguageChange(language);
    this.translate.setDefaultLang(language);
  }
  toHome() {
    let doc = document.getElementById("home");
    doc?.scrollIntoView({ behavior: "smooth" });
  }
  toIntro() {
    let doc = document.getElementById("intro");
    doc?.scrollIntoView({ behavior: "smooth" });
  }
  toWork() {
    let doc = document.getElementById("work");
    doc?.scrollIntoView({ behavior: "smooth" });
   }
  /*loggedin(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return (localStorage.getItem('user'));
  }*/
  /*onLogout(){
    localStorage.removeItem('user');
    this._notificationService.success("You are logged out !","");
  }*/
}
