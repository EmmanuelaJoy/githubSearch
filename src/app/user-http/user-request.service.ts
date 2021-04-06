import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user'
import { Repository } from '../repository'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user!: User;
  repos: Repository[];
  username: string;
  repoName: string;
  private clientId = 'a1bb7a683b14df0d15bc';
  private clientSecret = 'a4b786074f23372af39cda791c1fa5d60f94e847';
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", 0, 0, 0, 0, new Date(), "");
    this.repos = [new Repository("", "")];
    this.username = 'emmanuelajoy'
    this.repoName = ''
    this.baseUrl = "https://api.github.com/users/"
  }

  userRequest() {
    interface ApiResponse {
      avatar_url: string;
      login: string;
      bio: string;
      location: string;
      public_repos: number;
      public_gists: number;
      followers: number;
      following: number;
      created_at: Date;
      html_url: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(this.baseUrl + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret).toPromise().then(response => {
        this.user.profileUrl = response.avatar_url
        this.user.name = response.login
        this.user.bio = response.bio
        this.user.location = response.location
        this.user.public_repos = response.public_repos
        this.user.public_gists = response.public_gists
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.created_at = response.created_at
        this.user.siteLink = response.html_url

        resolve()
      },
        error => {
          this.user.name = "Unavailable"

          reject(error)
        })
    })
    return promise
  }

  repositoryRequest(): Observable<any> {
    return this.http.get<any>(this.baseUrl + this.username + '/repos' + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }

  updateUserAccount(inputtedUserName: string) {
    this.username = inputtedUserName
  }

  updateRepo(repoName: any) {
    this.repoName = repoName
  }

  authorization = environment.accessToken
  repoSearch() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({ Authorization: this.authorization })
    }))
  }

}