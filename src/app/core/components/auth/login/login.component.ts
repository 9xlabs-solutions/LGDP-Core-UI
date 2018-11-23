import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {LoginRequest} from '../../../requests/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  /**
   * Login and retrieve the auth_token
   */
  login() {
    this.auth.login(this.loginRequest.username, this.loginRequest.password)
      .subscribe(result => {

        console.log(result);

        if (this.auth.saveAuthToken(result.accessToken)) {
          console.log('navigating to dashboard...');
          this.router.navigate(['dashboard']);
        }

      }, error => {
        console.log(error);
      });
  }
}
