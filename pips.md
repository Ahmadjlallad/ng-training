# pips [pips Doc](https://angular.io/guide/pipes)

using to manipulates the data in the template
like {{server.instanceType | uppercase }}
passing a parameter to pip

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <ul class="list-group">
        <li
          class="list-group-item"
          *ngFor="let server of servers"
          [ngClass]="getStatusClasses(server)"
        >
          <span class="badge-primary rounded m-2"> {{ server.status }} </span>
          <strong>{{ server.name }}</strong> | {{ server.instanceType |
          uppercase }} | {{ server.started | date: "fullDate" | uppercase }}
          <!-- changing the order is important left to right -->
        </li>
      </ul>
    </div>
  </div>
</div>
```

## custom pipe

```ts
import { Pipe, PipeTransform } from "@angular/core";
// and need to provided it in the declarations array in the NgModule
@Pipe({
  name: "shorten",
})
export class ShortensPip implements PipeTransform {
  // always ned to return a value
  transform(value: string, ...arg: number[]) {
    const { [0]: start, [1]: limit } = arg;
    if (value.length < limit) return value;
    return value.substring(start, limit) + "...";
  }
}
```

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false, //  the default behaver is not update the ui when ever the value is updated
  // but by setting it to false it will rerender the ui
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString, propName): any[] {
    console.log(filterString, propName);
    if (value.length <= 0) return value;
    const f = value.filter((item) => item[propName] === filterString);
    return f;
  }
}
```

async data is just by adding async pipe
| async
