import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { NavbarComponent } from "./navigation/navbar.component";
import { FooterComponent } from './navigation/footer.component';

import { RouterModule, } from "@angular/router";
import { UsersModule } from "./users/users.module";
import { AuthService, AlertsService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AuthGuard,
} from './guards';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full"},
      { path: "**", redirectTo: "login", pathMatch: "full"},
      {path: "user", canActivate: [AuthGuard], loadChildren: "./users/users.module#UserModule"}
    ]),
    UsersModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    DataTablesModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
