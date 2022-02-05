import { EventEmitter, Injectable, Output } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  currentLiter = 'a';
  @Output() statusUpdate = new EventEmitter<string>();
  constructor(private logInService: LoggingService) {}
  updateTheCurrentLiter(a: string) {
    this.statusUpdate.emit(a);
    this.logInService.logStateChange(this.currentLiter);
  }
  logChr() {
    this.logInService.logStateChange(this.currentLiter);
  }
}
