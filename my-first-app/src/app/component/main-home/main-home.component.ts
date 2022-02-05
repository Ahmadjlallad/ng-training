import { Component } from '@angular/core';
import { AccountService } from 'shared/account.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent {
  constructor(private account: AccountService) {}
  onChangeChr() {
    this.account.logChr();
  }
}
