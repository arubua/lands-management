import { Component } from "@angular/core";

@Component({
    templateUrl:"./initiate-transfer.component.html",
    styles:[`
    .privateKey{
        width:50%;
        align:center;
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

export class InitiateTransferComponent {}