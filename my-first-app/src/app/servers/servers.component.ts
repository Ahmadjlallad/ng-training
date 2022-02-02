import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server Was Created!";
  allowAddServer = () => {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  constructor() {
    this.allowAddServer()
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "server was created"
  }
}
