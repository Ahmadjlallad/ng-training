# router

1. import Router
2. add an array containing the routes

```ts
const appRoute: Routes = [
  { path: "", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "users", component: UsersComponent },
  { path: "users/:userId/:name", component: UserComponent },
  // children to get a nested route we can use <router-outlet>

  {
    path: "servers",
    component: ServersComponentRouting,
    children: [
      { path: ":id", component: ServerComponentRouter },
      { path: ":id/edit", component: EditServerComponent },
    ],
  },
  // wild card
  { path: "**", component: FontFoundComponent },
  // redirect
  { path: "redirect", redirectTo: "home", pathMatch: "full" },
];
```

3. import RouterModule

```ts

  imports: [BrowserModule, NgbModule, RouterModule.forRoot(appRoute)],
```

## routerLink is used to navigate to a route

- add option routerLinkActiveOptions
  `[routerLinkActiveOptions]="{ exact: true }"`

```html
<li
  class="nav-item"
  role="presentation"
  routerLinkActive="active"
  [routerLinkActiveOptions]="{ exact: true }"
>
  <a class="nav-link" routerLink="/home">Home</a>
</li>
<li role="presentation"><a routerLink="/servers">Servers</a></li>
<li role="presentation"><a [routerLink]="'/users'">Users</a></li>
```

### navigate dynamically

```ts
  constructor(private router: Router) {}

  onLoadServers() {
    this.router.navigate(['/servers']);
  }
```

`this.router.navigate` dose not know where what path are loaded unlike the routerLink
do that to tell navigate where we are going to navigate to

```ts
  constructor(private router: Router, Private route: ActivatedRoute) {}

  onLoadServers() {
  // we can
    this.router.navigate(['/servers'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
```

using the route we can get the parameters

```ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      // snapshot dose not update if we did update the route but the component didn't change
      id: this.route.snapshot.params["userId"],
      name: this.route.snapshot.params["name"],
    };
    // to get around this we use the .params.subscribe
    // this is observables help to subscribe to the route its asynchronous operation
    // and this will not run when ngOnInit is called but when the component is loaded
    this.route.params.subscribe(
      (params: Params) =>
        (this.user = {
          id: params["userId"],
          name: params["name"],
        })
    );
    this.route.queryParams.subscribe();
    // when the component get destroyed it will unsubscribe from the route
  }
}
```

### adding a query params

```
  [routerLink]="['/servers', 5, 'edit']"
  [queryParams]="{ alowEdit: true }"
  fragment="loading"
```

## garde a route

we have to implements a CanActivate class as a service

```ts
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";

import { Observable } from "rxjs";
@Injectable()
export class GardeService implements CanActivate {
  constructor(private router: Router) {}
  isAuth = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.router.navigate(["/"]);
  }
}
```

- by returning one of the mentioned above we can protect the route and adding an
  `canActivate: [GardeService]` in the path
- we can do the same thing for canActiveChid
