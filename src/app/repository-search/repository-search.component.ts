import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository'
import { UserRequestService } from '../user-http/user-request.service'

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.css']
})
export class RepositorySearchComponent implements OnInit {

  repoName: any;
  repos!: Repository[];
  constructor(private userService: UserRequestService) { }

  findRepository() {
    this.userService.updateRepo(this.repoName);
    this.userService.repoSearch().subscribe((data) => {
      this.repos = data["items"];
      console.log(this.repos)
    })
  }
  ngOnInit(): void {

  }

}
