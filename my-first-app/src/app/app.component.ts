import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { userService } from 'shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  constructor(private user: userService) {}
  sub: Subscription;
  ngOnInit(): void {
    this.sub = this.user.activatedEmitter.subscribe((isActive) => {
      this.userActivated = isActive;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
