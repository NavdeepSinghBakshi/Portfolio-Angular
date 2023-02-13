import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/common/interfaces/settings';
import { SettingsService } from 'src/app/common/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(private _settingsService: SettingsService) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {
  }

  closeSettings() {
    this._settingsService.toggleSettings();
  }

  toggleOpenLinksInNewTab() {
    this._settingsService.toggleOpenLinksInNewTab();
  }

  selectTheme(theme:string) {
    this._settingsService.setTheme(theme);
  }

  changeTitleFont(val:string){
    this._settingsService.setFont(val);
  }

  changeSpacing(val:string){
    this._settingsService.setSpacing(val);
  }
}
