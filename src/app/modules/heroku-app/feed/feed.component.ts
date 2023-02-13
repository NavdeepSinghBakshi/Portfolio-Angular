import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Story } from 'src/app/common/modals/story';
import { HackerNewsApiService } from 'src/app/common/services/hackernews-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feedType!: string;
  typeSub!: Subscription;
  pageSub!: Subscription;
  pageNum!: number;
  listStart!: number;
  errorMessage = '';
  items!: Story[];
  constructor(private route: ActivatedRoute,private _hackerNewsAPIService: HackerNewsApiService,) { }

  ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => {
        this.feedType = data.feedType;
      });
      this.pageSub = this.route.params.subscribe(params => {
        this.pageNum = params['page'] ? +params['page'] : 1;
        this._hackerNewsAPIService.fetchFeed(this.feedType, this.pageNum)
        .subscribe(
          items => this.items = items,
          error => this.errorMessage = 'Could not load ' + this.feedType + ' stories.',
          () => {
            this.listStart = ((this.pageNum - 1) * 30) + 1;
            window.scrollTo(0, 0);
          }
        );
      });
  }

}
