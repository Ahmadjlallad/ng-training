# Http

1. import the HttpClientModule from @angular/common/http
   and import it at imports array
   to make a call

```ts
 private fetchPost() {
    // multiple params we have to append it
    let params = new HttpParams().set('print', 'pretty');
    params = params.append('me', 'p');

    this.http
    // if u not subscribe to it will not be send
      .get<{ [key: string]: Post }>(
        'https://angular-367dd-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'custom-header': 'hello' }),
          params,
          // change the data that we have received
          // body by default
          observe: 'response',
          // will give multiple event sen
          // we can use HttpEventType enum to compare it
          observe: 'events',
          //we can change the response Type
          // like text or blob
          responseType:""


        }
      )
      // tap to do something and let you to continue
      .pipe(
        tap((e) => {
          console.log(e);
        })
      )
      .pipe(
        map((post: { [key: string]: Post }) => {
          const postNewForm: Post[] = Object.entries(post).map(
            ([key, value]) => ({
              ...value,
              id: key,
            })
          );
          return postNewForm;
        })
      )
    // if u not subscribe to it will not be send
      .subscribe((post) => {
        // by default the return value will be the data

        this.loadedPosts = post;
      });
  }
```

## HTTP_INTERCEPTORS

```ts
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, tap } from "rxjs";
// this will run right before the request

export class AuthInterceptor implements HttpInterceptor {
  // req, next
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // to modify the req we have to clone it
    const modifiedReq = req.clone({
      headers: req.headers.append("auth", "xyz"),
    });

    // next.handle(req); will make the req continue
    console.log(req, "in the way");
    // we can add .pip or sub or do any thing with observer
    return next.handle(modifiedReq).pipe(
      tap((e) => {
        // the res is allows type event
        if (e.type === HttpEventType.Response) console.log(e);
      })
    );
  }
}
```

```ts
providers: [
  // this is a token that tell angular its http req

  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true },
];
```
