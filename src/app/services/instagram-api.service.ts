import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CodeExchange} from '../models/CodeExchange';
import {TokenCode} from '../models/TokenCode';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {

  httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  baseUrl = 'https://api.instagram.com/oauth';
  private form: string;

  constructor(private http: HttpClient) {

  }

  getToken(codeExchange: CodeExchange): Observable<TokenCode> {
    codeExchange.redirect_uri = environment.oauthUri;
    codeExchange.grant_type = 'authorization_code';

    const body = new URLSearchParams();
    body.set('client_id', codeExchange.client_id);
    body.set('client_secret', codeExchange.client_secret);
    body.set('grant_type', 'authorization_code');
    body.set('redirect_uri', `${location.protocol}//${location.hostname + (location.port ? ':' + location.port : '')}/oauth/`);
    body.set('code', codeExchange.code);

    return this.http.post<TokenCode>(this.baseUrl + '/access_token',
      body.toString(), this.httpOptions);
  }


}
