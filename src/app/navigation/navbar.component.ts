import { Component } from "@angular/core";
import {AuthService} from "../services/auth.service";
import { Globals } from "../../globals";

@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styles:[`
  
 
  `] 
})

export class NavbarComponent {
    constructor( public auth:AuthService,public globals: Globals) {}
}