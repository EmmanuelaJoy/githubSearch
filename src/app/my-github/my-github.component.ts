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
  repos!: Repository[];
  username!: string;
  constructor(private userService: UserRequestService) {

  }

  findUserAccount() {
    this.userService.updateUserAccount(this.username);
    this.userService.userRequest()
    this.user = this.userService.user
    console.log(this.user)
    this.userService.repositoryRequest().subscribe((data) => {
      console.log(data)
      this.repos = data
    })

  }

  ngOnInit(): void {

  }

}
