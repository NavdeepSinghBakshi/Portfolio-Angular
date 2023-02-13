import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UserComponent } from './user/user.component';

const feedRoutes = [{
  path: ':page',
  component: FeedComponent
}];
const routes: Routes = [
  {path: '',component : HomeComponent,children:[
    {path: '', redirectTo: 'news/1', pathMatch: 'full'},
    {
      path: 'news',
      children: feedRoutes,
      data: {feedType: 'news'}
    },
    {
      path: 'newest',
      children: feedRoutes,
      data: {feedType: 'newest'}
    },
    {
      path: 'show',
      children: feedRoutes,
      data: {feedType: 'show'}
    },
    {
      path: 'ask',
      children: feedRoutes,
      data: {feedType: 'ask'}
    },
    {
      path: 'jobs',
      children: feedRoutes,
      data: {feedType: 'jobs'}
    }
  ]},
  {path:'item/:id',component:ItemDetailsComponent},
  {path:'user/:id',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerokuAppRoutingModule { }
