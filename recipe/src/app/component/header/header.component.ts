import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() goTo = new EventEmitter<string>();
  link(navTo: string) {
    console.log(navTo);
    this.goTo.emit(navTo);
  }
  constructor() {}

  ngOnInit(): void {}
}
