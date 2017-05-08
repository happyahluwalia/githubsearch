import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private clientID = '39bf1a91ed45d77a66e2';
  private ClientSecret = 'e53aa8634107b9f6591d321a78a2984ec0d065cb';


  constructor(private http: Http ) { }

  getUser(username: string) {
    return this.http.get('http://api.github.com/users/' + username + '?client_id=' + this.clientID
                          + '&client_secret=' + this.ClientSecret)
                    .map(res => res.json());

  }

   getRepos(username: string) {
    return this.http.get('http://api.github.com/users/' + username + '/repos?client_id=' + this.clientID
                          + '&client_secret=' + this.ClientSecret)
                    .map(res => res.json());

  }

}
