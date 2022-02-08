import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
// this will run right before the request

export class AuthInterceptor implements HttpInterceptor {
  // req, next
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // to modify the req we have to clone it
    const modifiedReq = req.clone({
      headers: req.headers.append('auth', 'xyz'),
    });

    // next.handle(req); will make the req continue
    console.log(req, 'in the way');
    // we can add .pip or sub or do any thing with observer
    return next.handle(modifiedReq).pipe(
      tap((e) => {
        // the res is allows type event
        if (e.type === HttpEventType.Response) console.log(e);
      })
    );
  }
}
