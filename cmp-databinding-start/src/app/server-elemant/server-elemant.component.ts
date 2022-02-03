import { Component } from "angular/core";
@Component({
  selector: "server-elemant",
  templateUrl: "./cockpit.component.html",
  stylesUrl: "./cockpit.component.css",
})
export class Cockpit implements OnInit {
  constructor() {}

  @Input() element: {
    type: string;
    name: string;
    content: string;
  };
  ngOnInit() {}
}
