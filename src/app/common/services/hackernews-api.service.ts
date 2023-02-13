import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PollResult } from '../modals/poll-result';
import { Story } from '../modals/story';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {
  baseUrl: string;
  constructor() { 
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }
  fetchFeed(feedType: string, page: number): Observable<Story[]> {
    return lazyFetch(`${this.baseUrl}/${feedType}?page=${page}`);
  }
  fetchItemContent(id: number): Observable<any> {
    return lazyFetch(`${this.baseUrl}/item/${id}`).pipe(map((story: Story) => {
      if (story.type === 'poll') {
        let numberOfPollOptions = story.poll.length;
        story.poll_votes_count = 0;
        for (let i = 1; i <= numberOfPollOptions; i++) {
          this.fetchPollContent(story.id + i).subscribe(pollResults => {
            story.poll[i - 1] = pollResults;
            story.poll_votes_count += pollResults.points;
          });
        }
      }
      return story;
    }));
  }

  fetchPollContent(id: number): Observable<PollResult> {
    return lazyFetch(`${this.baseUrl}/item/${id}`);
  }

  fetchUser(id: string): Observable<User> {
    return lazyFetch(`${this.baseUrl}/user/${id}`);
  }
  
}
function lazyFetch<T>(url:string, options?:any) {
  return new Observable<any>(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then((res:any) => {
        if (!cancelToken) {
          return res.json()
            .then((data:any) => {
              fetchObserver.next(data);
              fetchObserver.complete();
            });
        }
      }).catch(err => fetchObserver.error(err));
    return () => {
      cancelToken = true;
    };
  });
}
