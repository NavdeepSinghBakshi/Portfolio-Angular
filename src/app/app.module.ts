import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { AngularMaterialModule } from './core/modules/angular-material/angular-material.module';
import { PrimengModule } from './core/modules/primeng/primeng.module';
import { I18nModule } from './core/modules/i18n/i18n.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './common/components/home/home.component';
import { ContactComponent } from './common/components/contact/contact.component';
import { LoaderComponent } from './common/components/loader/loader.component';
import { UserService } from './common/services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    PrimengModule,
    I18nModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
