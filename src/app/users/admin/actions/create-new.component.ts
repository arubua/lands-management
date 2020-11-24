import { Component, OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { faUser } from "@fortawesome/free-solid-svg-icons";

import { AuthService, AlertsService } from 'src/app/services';
import { Globals } from 'src/globals';

@Component({
    selector:"lms-create-new",
    templateUrl: "./create-new.component.html",
    styles:[`
    .is-invalid{
        border:1px solid red;
       
    }
    .invalid-feedback{
        font-size:x-small;
        color:red;
    }
    .kt-portlet {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
        background-color: #ffffff;
        margin-bottom: 20px;
        border-radius: 4px;
        margin-top: 1%;
        min-height: calc(100vh - 255px);
    }
    `]
})

export class CreateNewComponent implements OnInit {
    fullName;
    email;
    username;
    password;
    notification;
    role;
    faUser=faUser;
    newUserForm: FormGroup;
    submitted = false;

    constructor( 
        private router:Router,
        private fb:FormBuilder,
        private authService:AuthService,
        private alertsService:AlertsService,
        public globals:Globals) {}

        ngOnInit(){
            this.newUserForm = this.fb.group({
                fullName:['', Validators.required],
                email:['', Validators.required],
                username:['', Validators.required],
                password:['', Validators.required],
                notification:['', Validators.required],
                role:['', Validators.required],

            })
        }

        get f() {
            return this.newUserForm.controls;
        }

        save(data){
        this.submitted = true;

        if (this.newUserForm.invalid) {
            return;
        }

        console.log(data);
        alert('SUCCESS!!');
         
    }


}