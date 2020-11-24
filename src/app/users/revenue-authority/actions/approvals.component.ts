import { Component } from "@angular/core";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
@Component({
    templateUrl:"./approvals.component.html",
    styleUrls:["./pending.component.css"]
})

export class ApprovalsComponent {
    faChevronLeft = faChevronLeft;
  	faChevronRight = faChevronRight;
}