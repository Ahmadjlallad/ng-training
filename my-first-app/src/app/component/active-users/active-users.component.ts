import { Component, Input, OnInit } from '@angular/core';
import { userService } from 'shared/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  constructor(private user: userService) {}
  users: string[] = [];
  ngOnInit(): void {
    this.users = this.user.activeUsers;
  }
  onSetToInactive(id: number) {
    this.user.setToInactive(id);
  }
}
