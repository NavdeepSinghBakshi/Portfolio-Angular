import { Component, OnInit } from '@angular/core';
import { concatMap, delay, map, mergeMap, skip, take } from 'rxjs/operators';
import { forkJoin, from, Observable, of } from 'rxjs';
import { RxjsService } from 'src/app/common/services/rxjs.service';
import { DesignUtilityService } from 'src/app/common/services/design-utility.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  user : any
  username! : string;
  posts : any
  albums : any;
  constructor(private _rxjsService : RxjsService,private _du : DesignUtilityService) { }

  ngOnInit(){
   this.getUser();
  }
  getHtml(data:any){
    return of(`<div><p><b>Notification - ${data.id} </b>${data.title}</p></div>`).pipe(delay(1000));
  }
  getUser(){
    this._rxjsService.getUser().pipe(
      map(users => {
        const user = users[0];
        this.username = user.username;
        return user;
      }),
      mergeMap(user =>
         {
        const posts = this._rxjsService.getPostsByUserId(user.id);
        const albums = this._rxjsService.getAlbumsByUserId(user.id);
        return forkJoin([posts,albums]);
      })
      ).subscribe(result => {
        this.posts = result[0];
        this.albums = result[1];
        from(this.albums).pipe(concatMap(res => this.getHtml(res))).subscribe(res => {
          this._du.print(res,'elContainer');
         })
      })
  }

}