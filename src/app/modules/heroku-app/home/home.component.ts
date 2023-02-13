import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Settings } from 'src/app/common/interfaces/settings';
import { SettingsService } from 'src/app/common/services/settings.service';

//declare let ga: Function;

@Component({
  selector: 'heroku-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  settings!: Settings;
  theme!: string;
  constructor(
    private _settingsService: SettingsService,
    public router: Router
  ) {
    this.settings = this._settingsService.settings;
    /*this.router.events.subscribe(event => {debugger
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });*/
  }

  ngOnInit(): void {
  }

}
