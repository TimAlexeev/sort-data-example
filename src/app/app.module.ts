import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserService } from './service/user.service';
import { PaginationService } from './service/pagination.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
