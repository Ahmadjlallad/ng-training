# services

Angular inject the instant into the class

1. create a typescript class
2. than bind it to constructor and the type has to be the class we created
3. we have to provided it in the providers array

```ts
export class LoggingService {
  logStateChange(change: string) {
    console.log(change);
  }
}
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
  providers: [LoggingService],
})
  constructor(private loggingService: LoggingService) {}
```

angular will instantiate for us
