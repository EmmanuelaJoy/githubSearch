import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  private username: string;

  constructor(private http: HttpClient) {
    this.username = 'emmanuelajoy'
  }

  userRequest() {
    return this.http.get("https://api.github.com/users/" + this.username);
  }

}