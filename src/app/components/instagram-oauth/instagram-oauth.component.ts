import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InstagramApiService} from '../../services/instagram-api.service';
import {CodeExchange} from '../../models/CodeExchange';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-instagram-oauth',
  templateUrl: './instagram-oauth.component.html',
  styleUrls: ['./instagram-oauth.component.css'],
  providers: [InstagramApiService]
})
export class InstagramOauthComponent implements OnInit {

  loadingMsg = '';

  constructor(private route: ActivatedRoute, private router: Router, public instagramService: InstagramApiService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      if (value != null) {
        const codeExchange = new CodeExchange();
        codeExchange.client_id = environment.clientId;
        codeExchange.client_secret = environment.clientSecret;
        codeExchange.code = value.code != null ? value.code.replace('#', '') : '';

        this.instagramService.getToken(codeExchange).subscribe(tokenInfo => {
          localStorage.setItem('joshomdcodes.accessToken', tokenInfo.access_token);
          localStorage.setItem('joshomdcodes.userId', tokenInfo.user_id);

          this.router.navigateByUrl('logged/dashboard');
        });
      }
    });
  }
}
