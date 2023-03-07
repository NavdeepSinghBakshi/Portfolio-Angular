import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/common/interfaces/settings';
import { SettingsService } from 'src/app/common/services/settings.service';

@Component({
  selector: 'heroku-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settings!: Settings;
  constructor(private _settingsService: SettingsService) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit(): void {
  }
  toggleSettings() {
    this._settingsService.toggleSettings();
  }
  scrollTop() {
    window.scrollTo(0, 0);
  }
  fullscreen() {
    let elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }
  closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
