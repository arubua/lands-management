import { Injectable } from "@angular/core";

@Injectable()
export class AlertsService {
  constructor() {}
  setAlert(type: String, message: String){

  }

  handleError(error){
    if(error.status == 500){
      return "Ooops! We encountered an error processing your request.";
    }else{
      return error.error;
    }

  }
}
