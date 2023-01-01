import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TranslateLoader,TranslateModule,TranslateService } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  exports: [TranslateModule]
})


export class I18nModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'hi' , 'pu']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|hi|pu/) ? browserLang : 'en');
  }
 }

 export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}