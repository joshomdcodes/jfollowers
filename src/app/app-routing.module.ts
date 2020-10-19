import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InstagramOauthComponent} from './components/instagram-oauth/instagram-oauth.component';
import {HomeComponent} from './components/home/home.component';
import {InstagramDashboardComponent} from './components/instagram-dashboard/instagram-dashboard.component';


const routes: Routes = [
  // for manage oauth Instagram.
  {path: 'oauth', component: InstagramOauthComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'logged', children: [
      {path: 'dashboard', component: InstagramDashboardComponent}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes, {useHash: true})
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
