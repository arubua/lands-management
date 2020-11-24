import { Injectable } from "@angular/core";
import { User } from "./app/models/user.model";

@Injectable()
export class Globals {
	currentUser: User;
  currentYear: any;
  today:any;
    constructor() {
    	this.currentUser = JSON.parse(localStorage.getItem('user'));
      this.currentYear = new Date().getFullYear();
      this.today = new Date();
    }
    ngOnInit(): void {
        console.log('in')
      }

    //This is a duplicate of the constructor above.
    //It fixes issues where a component is loaded without refreshing a page.
    init() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.currentYear = new Date().getFullYear();
        this.today = new Date();
    }
}
