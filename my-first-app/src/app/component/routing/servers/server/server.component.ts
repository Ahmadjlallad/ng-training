import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server-router',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponentRouter implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.server = this.serversService.getServer(Number(id));
    this.router.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
    });
    console.log(this.server);
  }
}
