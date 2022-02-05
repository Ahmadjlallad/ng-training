import { Component } from '@angular/core';
import { AccountService } from 'shared/account.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning-alart.component.html',
})
export class WarningAlertComponent {
  constructor(private account: AccountService) {}
  twoWayBinding = '';
  onUpdateLiter(e) {
    this.account.currentLiter = e.target.value;
    this.account.updateTheCurrentLiter(e.target.value);
  }
}
