import { Component } from "@angular/core";
import {AuthService} from "../services/auth.service";


@Component({
    selector:"app-footer",
    templateUrl:"./footer.component.html",
    styles:[`
  .lm-footer{
      margin-top:75vh;
  }
 
  `] 
})

export class FooterComponent {
   

    constructor( public auth:AuthService) {}

    
  
}