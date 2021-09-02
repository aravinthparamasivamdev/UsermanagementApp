import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';
import { UserActionComponent } from './components/user-action/user-action.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'newUser', component: NewUserComponent },
  { path: 'summary', component: UserSummaryComponent },
  { path: 'userAction', component: UserActionComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewUserComponent,
    UserSummaryComponent,
    UserActionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
