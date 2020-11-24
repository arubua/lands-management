import { Component, OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { AuthService, AlertsService } from 'src/app/services';
import { Globals } from 'src/globals';

@Component({
    templateUrl: "./land-owner-reg.component.html",
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

export class LandOwnerRegistrationComponent implements OnInit {
    firstName;
    lastName;
    email;
    contactNumber;
    idNumber;
    address;
    lrNumber;
    newLandOwnerRegistrationForm: FormGroup;
    submitted = false;

    faUser=faUser;
    faInfoCircle=faInfoCircle;
    faLocationArrow=faLocationArrow;

    constructor (
        private authService:AuthService,
        private alertsService:AlertsService,
        private fb:FormBuilder,
        private globals:Globals,
        private router:Router
    ) {}

    ngOnInit(){
        this.newLandOwnerRegistrationForm = this.fb.group({
            firstName:["",Validators.required],
            lastName:["",Validators.required],
            email:["",Validators.required],
            contactNumber:["",Validators.required],
            idNumber:["",Validators.required],
            address:["",Validators.required],
            lrNumber:["",Validators.required]
        })
    }

    get f() { return this.newLandOwnerRegistrationForm.controls; }

    save(data){
        this.submitted = true;

        if (this.newLandOwnerRegistrationForm.invalid) {
            return;
        }

        console.log(data);
        alert('SUCCESS!!');
    }
}