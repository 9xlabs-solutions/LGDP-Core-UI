import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor(
    private service: DashboardService,
    private auth: AuthenticationService,
    private router: Router
  ) { this.user = new User(); }

  ngOnInit() {

    this.service.getCurrentUser().subscribe((response: User) => {
      console.log(response);

      this.user = response;
    });

  }

  /**
   * Logout the user
   */
  logout() {
    this.auth.logout();

    this.router.navigate(['/login']);
  }
}
