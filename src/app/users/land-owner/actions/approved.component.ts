import { Component } from "@angular/core";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
@Component({
    templateUrl:"./approved.component.html",
    styleUrls:["./pending.component.css"]
})

export class ApprovedComponent {
    faChevronLeft = faChevronLeft;
  	faChevronRight = faChevronRight;
}