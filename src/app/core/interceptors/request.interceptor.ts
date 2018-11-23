import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('From Error Response');
          console.log(err.message);
        }
      }));
  }

}
