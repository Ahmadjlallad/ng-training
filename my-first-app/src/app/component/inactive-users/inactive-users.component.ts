import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userService } from 'shared/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  constructor(private user: userService) {}
  users: string[] = [];
  ngOnInit(): void {
    this.users = this.user.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.user.setToActive(id);
  }
}
