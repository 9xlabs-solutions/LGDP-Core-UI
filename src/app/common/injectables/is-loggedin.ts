import {Router} from '@angular/router';
import {AuthenticationService} from '../../core/services/authentication.service';
import {Injectable} from '@angular/core';

@Injectable()
export class IsLoggedIn {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  resolve(): void {
    if (this.authService.isAuthTokenExists()) {
      this.router.navigate(['login']);
    }
  }

}
