import { Component, OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { faUser } from "@fortawesome/free-solid-svg-icons";

import { AuthService, AlertsService } from 'src/app/services';
import { Globals } from 'src/globals';

@Component({
    templateUrl: "./new-land-record.component.html",
    styles:[`
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

export class NewLandRecordComponent implements OnInit {
    lrNumber;
    coordinates;
    idNumber;
    titleDeed;
    newLandRecordForm: FormGroup;
    submitted = false;
    

    constructor (
        private authService:AuthService,
        private alertsService:AlertsService,
        private fb:FormBuilder,
        private globals:Globals,
        private router:Router
    ) {}

    ngOnInit(){
        this.newLandRecordForm = this.fb.group({
            lrNumber:["",Validators.required],
            coordinates:["",Validators.required],
            idNumber:["",Validators.required],
            titleDeed:["",Validators.required],
        })
    }
    
    get f() {
        return this.newLandRecordForm.controls;
    }

    save(data){
        this.submitted = true;

        if (this.newLandRecordForm.invalid) {
            return;
        }

        console.log(data);
        alert('SUCCESS!!');
         
    }
}