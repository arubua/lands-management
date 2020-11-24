import { Component } from "@angular/core";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
@Component({
    templateUrl:"./declines.component.html",
    styleUrls:["./pending.component.css"]
})

export class DeclinesComponent {
    faChevronLeft = faChevronLeft;
  	faChevronRight = faChevronRight;
}