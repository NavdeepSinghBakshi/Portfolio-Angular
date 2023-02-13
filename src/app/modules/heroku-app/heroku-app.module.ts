import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerokuAppRoutingModule } from './heroku-app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './item-details/comment/comment.component';


@NgModule({
  declarations: [
    FeedComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent,
    LoaderComponent,
    ErrorMessageComponent,
    ItemComponent,
    FooterComponent,
    UserComponent,
    ItemDetailsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HerokuAppRoutingModule,
    SharedModule
  ]
})
export class HerokuAppModule { }
