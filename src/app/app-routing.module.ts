import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MyGithubComponent } from './my-github/my-github.component';
import { RepositorySearchComponent } from './repository-search/repository-search.component';

const routes: Routes = [
  { path: 'user', component: MyGithubComponent },
  { path: 'repository', component: RepositorySearchComponent },
  { path: '', redirectTo: "/user", pathMatch: "full" },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
