import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Story } from 'src/app/common/modals/story';
import { Settings } from 'src/app/common/interfaces/settings';
import { SettingsService } from 'src/app/common/services/settings.service';
import { HackerNewsApiService } from 'src/app/common/services/hackernews-api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  sub!: Subscription;
  item!: Story;
  errorMessage = '';
  settings: Settings;

  constructor(
    private _hackerNewsAPIService: HackerNewsApiService,
    private _settingsService: SettingsService,
    private route: ActivatedRoute,
    private _location: Location
  ) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this._hackerNewsAPIService.fetchItemContent(itemID).subscribe(item => {
        this.item = item;
      }, error => this.errorMessage = 'Could not load item comments.');
    });
    window.scrollTo(0, 0);
  }

  goBack() {
    this._location.back();
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
