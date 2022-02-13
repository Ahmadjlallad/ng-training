import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { userService } from 'shared/user.service';

@Component({
  selector: 'app-user-observables',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserObservablesComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userServer: userService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
  onActivate() {
    this.userServer.activatedEmitter.next(true);
  }
}
