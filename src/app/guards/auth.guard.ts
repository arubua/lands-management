// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute,NavigationEnd } from '@angular/router';
import { AuthService } from "../services";
import {Observable, Observer} from 'rxjs';
import { Globals } from "../../globals";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, public globals: Globals) { }
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(true)
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class RevenueAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, public globals: Globals) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(currentUser.roles.includes(3));
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class LandRegistryAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, public globals: Globals) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(currentUser.roles.includes(2));
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class LandOwnerAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, public globals: Globals) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(currentUser.roles.includes(4));
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, public globals: Globals) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(currentUser.roles.includes(1));
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

