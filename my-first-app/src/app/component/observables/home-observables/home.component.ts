import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-observables',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeObservablesComponent implements OnInit, OnDestroy {
  constructor() {}
  private intervalSup: Subscription;
  ngOnInit() {
    // create the logic for it and subscribe to it

    const customIntervalObserver = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 4) {
          // it cancel the subscription
          observer.error(new Error('ERROR: count is bigger than 4'));
        }
        if (count === 5) {
          // handle complete
          observer.complete();
        }
        count++;
      }, 1000);
    });
    // change the data in the observable class using operators aka pips
    // rxjs give us pips operators to change the data after Observable class have been created
    // that is vary useful for custom Observable
    // map((originalValue) => {
    // return new value
    //})
    const customData = customIntervalObserver.pipe(
      map((count: number) => {
        return 'round ' + (count + 1);
      })
    );

    // to handle an error we have to proved a second argument
    this.intervalSup = customData.subscribe({
      next: (count) => {
        console.log(count);
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  ngOnDestroy(): void {
    this.intervalSup.unsubscribe();
  }
}
