import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {InstagramOauthComponent} from './components/instagram-oauth/instagram-oauth.component';
import {HomeComponent} from './components/home/home.component';
import {InstagramApiService} from './services/instagram-api.service';
import {HttpClientModule} from '@angular/common/http';
import { InstagramDashboardComponent } from './components/instagram-dashboard/instagram-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InstagramOauthComponent,
    HomeComponent,
    InstagramDashboardComponent,
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
