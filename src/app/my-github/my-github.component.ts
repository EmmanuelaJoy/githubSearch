import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserRequestService } from '../user-http/user-request.service'

@Component({
  selector: 'app-my-github',
  templateUrl: './my-github.component.html',
  styleUrls: ['./my-github.component.css']
})
export class MyGithubComponent implements OnInit {

  user!: User;
  constructor(private userService: UserRequestService) {
    this.userService.userRequest().subscribe(profile => {
      console.log(profile)
    });
  }

  ngOnInit(): void {

  }

}
