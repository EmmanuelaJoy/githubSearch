import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Repository } from '../repository';
import { UserRequestService } from '../user-http/user-request.service'

@Component({
  selector: 'app-my-github',
  templateUrl: './my-github.component.html',
  styleUrls: ['./my-github.component.css']
})
export class MyGithubComponent implements OnInit {

  user!: User;
  repo!: Repository;
  constructor(private userService: UserRequestService) {

  }

  ngOnInit(): void {
    this.userService.userRequest()
    this.user = this.userService.user
    console.log(this.user)
    this.userService.repositoryRequest()
    this.repo = this.userService.repo
    console.log(this.repo)
  }

}
