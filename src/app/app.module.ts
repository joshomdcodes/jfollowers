import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {InstagramOauthComponent} from './components/instagram-oauth/instagram-oauth.component';
import {HomeComponent} from './components/home/home.component';
import {InstagramApiService} from './services/instagram-api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InstagramOauthComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InstagramApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
