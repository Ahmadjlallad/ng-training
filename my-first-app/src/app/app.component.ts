import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { AccountService } from 'shared/account.service';
import { NavService } from 'shared/nav.service';
import { userService } from 'shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck, OnInit {
  constructor(private account: AccountService, private nav: NavService) {}
  navTo;
  title = 'my-first-app';
  onChangeChr() {
    this.account.logChr();
  }
  ngOnInit(): void {}
  ngDoCheck(): void {
    this.navTo = this.nav.navigate;
  }
}
