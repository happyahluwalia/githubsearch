import { GithubService } from './service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: any[];
  private repos: any[];
  private userName = 'happyahluwalia';

  constructor(private githubService: GithubService) { }

  ngOnInit() {
   /* this.githubService.getUser(this.userName).subscribe(user =>
            {this.user = user;});

    this.githubService.getRepos(this.userName).subscribe(repos =>
            {this.repos = repos;  })*/
  }

  search() {
    this.githubService.getUser(this.userName).subscribe(user =>
            {this.user = user; });

    this.githubService.getRepos(this.userName).subscribe(repos =>
            {this.repos = repos;  })
  }
}
