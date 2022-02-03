import { Component } from "angular/core";
@Component({
  templateUrl: "./cockpit.component.html",
  stylesUrl: "./cockpit.component.css",
  selector: "cockpit",
})
export class Cockpit {
  constructor() {}
  @Output() serverCreated = new EventEmitter<{ serverName: string; serverContent }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string; serverContent }>();
  onAddCreated(){
    this.serverCreated.emit({this.serverName});
  }

}
