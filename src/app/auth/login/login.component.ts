import { Component, OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService, AlertsService } from "../../services";
import { Globals } from "../../../globals";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  mouseoverLogin;
  loginInvalid = false;
  loginForm: FormGroup;
  private formSubmitAttempt: boolean;

  constructor( private authService:AuthService,
     private router:Router,
     private fb:FormBuilder,
     private alertsService: AlertsService,
     public globals: Globals
  ) { }

  ngOnInit(): void {
    if(this.globals.currentUser){
      this.redirect();
    }
    this.loginForm = this.fb.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  login(user) {
    this.authService.loginUser(user.userName, user.password)
      .subscribe(
        response => {
          if(response){
            localStorage.setItem('user',JSON.stringify(response));
            this.globals.init();
            this.redirect(response);
          }else{
            this.alertsService.setAlert('error', 'Ooops! We encountered an error processing your request.');
          }
        },
        error => {
          this.alertsService.handleError(error);
        }
      );

  }

  redirect(user: any = undefined){
    user = user || this.globals.currentUser;
    if(user['roles'].length > 1){ //user has more than one role
      this.router.navigate(["/checkin"]);
      this.authService.isAuthenticated;
    }else{
      if(user['roles'][0] == 1){ //Admin
        this.router.navigate(["/admin"]);
        this.authService.isAuthenticated;
      }else if(user['roles'][0] == 2){ //Land Registrar
        this.router.navigate(["/lands"]);
        this.authService.isAuthenticated;
      }else if(user['roles'][0] == 3){ //Revenue Authority
        this.router.navigate(["/revenue"]);
        this.authService.isAuthenticated;
      }else if(user['roles'][0] == 4){ //Land Owner
        this.router.navigate(["/owner"]);
        this.authService.isAuthenticated;
      }
    }
  }

}