import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.isAuthTokenExists()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getAuthToken()}`
        }
      });

      return next.handle(req);
    }

    return next.handle(req);

  }
}
