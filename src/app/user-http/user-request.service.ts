import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user!: User;
  private username: string;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0, 0, 0, new Date(), "")
    this.username = 'emmanuelajoy'
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
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.username).toPromise().then(response => {
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

}