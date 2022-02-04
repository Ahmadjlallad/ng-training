import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from 'shared/logging.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
  providers: [LoggingService],
})
export class GameControlComponent implements OnInit {
  @Output() incrementNumberEv = new EventEmitter<number>();
  constructor(private loggingService: LoggingService) {}
  timer: ReturnType<typeof setInterval>;
  incrementalVal: number = 0;

  ngOnInit(): void {}
  start() {
    this.loggingService.logStateChange(this.incrementNumberEv);
    this.timer = setInterval(() => {
      this.incrementalVal++;
      this.incrementNumberEv.emit(this.incrementalVal);
    }, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
}
