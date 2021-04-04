import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRequestService } from './user-http/user-request.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyGithubComponent } from './my-github/my-github.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
