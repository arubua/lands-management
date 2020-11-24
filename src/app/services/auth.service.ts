import { Injectable } from "@angular/core";
import { IUser } from "../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';

const url = environment.app.url;

@Injectable()

export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    const loginInfo = {username: userName, password: password };
    const options = { headers: new HttpHeaders({"Content-Type": "application/json"})};

    return this.http.post(url + "/auth/login", loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data["user"];
      }))
       .pipe(catchError(err => {
         return of(false);
       }));
  }

  getUserByAccessToken(userId: string, accessToken: string) {
    const loginInfo = {userId: userId, accessToken: accessToken };
    const options = { headers: new HttpHeaders({"Content-Type": "application/json"})};

    return this.http.post(url + "/auth/getUserByAccessToken", loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data["user"];
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

 updateCurrentUser (firstName: string, lastName: string) {
   this.currentUser.fullName = firstName;
  

    const options = { headers: new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options );
  }
  logout () {
    this.currentUser = undefined;

    const options = { headers: new HttpHeaders({"Content-Type": "application/json"})};
    return this.http.post("/api/logout", {}, options);
  }

}// end Class
