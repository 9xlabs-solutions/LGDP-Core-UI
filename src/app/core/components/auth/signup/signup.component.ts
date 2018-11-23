import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {SignupRequest} from '../../../requests/signup.request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: SignupRequest = new SignupRequest();

  constructor(
    private auth: AuthenticationService,
    protected router: Router
  ) {
  }

  ngOnInit() {
  }

  /**
   * Signup the user
   */
  singup() {

    console.log(this.user);

    this.auth.signup(this.user).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    });
  }

}
