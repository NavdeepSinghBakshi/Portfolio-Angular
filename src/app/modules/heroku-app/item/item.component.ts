import { Component, Input, OnInit } from '@angular/core';
import { Settings } from 'src/app/common/interfaces/settings';
import { Story } from 'src/app/common/modals/story';
import { SettingsService } from 'src/app/common/services/settings.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Story;
  settings: Settings;

  constructor(private _settingsService: SettingsService) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {}

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
