import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  /**
   * Get current user details from API
   */
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(environment.baseApi + 'users/me');
  }
}
