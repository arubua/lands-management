import { Component, OnInit } from "@angular/core";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { Globals } from "../../../globals";


@Component({
  selector: "app-checkin",
  templateUrl: "./checkin.component.html",
  styleUrls:  ["./checkin.component.css"]
})
export class CheckinComponent implements OnInit {
faCogs = faCogs;

  constructor(public globals: Globals) { }

  ngOnInit(): void {

  }

}