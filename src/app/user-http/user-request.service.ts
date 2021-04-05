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
  private clientId: string = 'a1bb7a683b14df0d15bc';
  private clientSecret: string = 'a4b786074f23372af39cda791c1fa5d60f94e847';
  private baseUrl: string;
  private userUrl: string
  private repoUrl: string;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0, 0, 0, new Date(), "");
    this.repos = [new Repository("", "")];
    this.username = 'emmanuelajoy'
    this.repoName = ''
    this.baseUrl = "https://api.github.com/users/"
    this.userUrl = this.baseUrl + this.username
    this.repoUrl = this.baseUrl + this.username + '/repos'
  }

  userRequest() {
    interface ApiResponse {
      avatar_url: string;
      login: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
      html_url: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(this.userUrl + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret).toPromise().then(response => {
        this.user.profileUrl = response.avatar_url
        this.user.name = response.login
        this.user.bio = response.bio
        this.user.public_repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.created_at = response.created_at
        this.user.siteLink = response.html_url

        resolve()
      },
        error => {
          this.user.name = "Unavailable"
          this.user.bio = " "
          this.user.public_repos = 0
          this.user.followers = 0
          this.user.following = 0
          this.user.created_at = new Date

          reject(error)
        })
    })
    return promise
  }

  repositoryRequest(): Observable<any> {
    return this.http.get<any>(this.repoUrl + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }

  updateUserAccount(username: string) {
    this.username = username
  }

  updateRepo(repoName: any) {
    this.repoName = repoName
  }

  repoSearch() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({ Authorization: environment.accessToken })
    }))
  }

}