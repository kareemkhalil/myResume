import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { RedirectToComponent } from './redirect-to/redirect-to.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
// const router = [
//   { path: '', redirectTo: 'en/home', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent },
// ]
@NgModule({
  declarations: [
    AppComponent,
    SendEmailComponent,
    RedirectToComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
