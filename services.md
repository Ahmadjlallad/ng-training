# services

## [angular injector rules](https://angular.io/guide/hierarchical-dependency-injection)

Angular inject the instant into the class

### ElementInjector

#### hierarchy—created implicitly at each DOM element. An ElementInjector is empty by default unless you configure it in the providers property on @Directive() or @Component().

When you provide services in a component, that service is available by way of the ElementInjector at that component instance. It may also be visible at child component/directives based on visibility rules described in the resolution rules section.

- When the component instance is destroyed, so is that service instance.
- If the component's injector lacks the provider, it passes the request up to its parent component's ElementInjector.
- If Angular still doesn't find the provider, it throws an error.
- the hights level is the app.module.ts

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

### ModuleInjector

#### ModuleInjector hierarchy—configure a ModuleInjector in this hierarchy using an `@NgModule()` or `@Injectable()` annotation
