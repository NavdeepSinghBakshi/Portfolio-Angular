import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { HackerNewsApiService } from 'src/app/common/services/hackernews-api.service';
import { User } from 'src/app/common/modals/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  sub!: Subscription;
  user!: User;
  errorMessage = '';

  constructor(
    private _hackerNewsAPIService: HackerNewsApiService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let userID = params['id'];
      this._hackerNewsAPIService.fetchUser(userID).subscribe(data => {
        this.user = data;
      }, error => this.errorMessage = 'Could not load user ' + userID + '.');
    });
  }

  goBack() {
    this._location.back();
  }
}
