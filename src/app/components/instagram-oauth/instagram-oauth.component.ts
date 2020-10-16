import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InstagramApiService} from '../../services/instagram-api.service';
import {CodeExchange} from '../../models/CodeExchange';

@Component({
  selector: 'app-instagram-oauth',
  templateUrl: './instagram-oauth.component.html',
  styleUrls: ['./instagram-oauth.component.css'],
  providers: [InstagramApiService]
})
export class InstagramOauthComponent implements OnInit {

  constructor(private route: ActivatedRoute, public instagramService: InstagramApiService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      if (value != null) {
        const codeExchange = new CodeExchange();
        codeExchange.client_id = '435499847415948';
        codeExchange.client_secret = '5de0e7619edeb11ed33e4f0f1d0c2f97';
        codeExchange.code = value.code != null ? value.code.replace('#', '') : '';

        this.instagramService.getToken(codeExchange).subscribe(tokenInfo => {
          localStorage.setItem('accessToken', tokenInfo.access_token);
          localStorage.setItem('userId', tokenInfo.user_id);
        });
      }
    });
  }
}
