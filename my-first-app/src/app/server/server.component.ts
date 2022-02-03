import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // should be unique
  templateUrl: './server.component.html',
  styles: [],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
}
