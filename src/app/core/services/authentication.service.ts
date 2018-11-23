import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {BearerToken} from '../../modules/usermodule/models/responses/BearerToken';
import {SignupRequest} from '../requests/signup.request';
import {User} from '../../modules/usermodule/models/User';

@Injectable()
export class AuthenticationService {

  readonly token_key = '_authToken';

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Get the auth token from the API
   *
   * @param username username of the user that is being logged in
   * @param password password of the user that is being logged in
   */
  public login(username, password): Observable<BearerToken> {
    const baseUrl: string = environment.baseUrl;

    return this.http.post<BearerToken>(baseUrl + 'auth/login', {username, password});
  }

  /**
   * Logout the user
   */
  public logout(): void {
    this.clearAuthToken();
  }

  /**
   * Save the authentication in the local storage
   *
   * @param token JWTToken itself
   */
  public saveAuthToken(token: string): boolean {
    if (token.length > 10) {

      localStorage.setItem(this.token_key, token);

      return true;
    }

    return false;
  }

  /**
   * Clear Auth token from local storage
   */
  private clearAuthToken(): void {
    if (this.isAuthTokenExists()) {
      localStorage.setItem(this.token_key, null);
    }
  }

  /**
   * Check for the auth token in the memory
   */
  public isAuthTokenExists(): boolean {
    const string: string = localStorage.getItem(this.token_key);

    return string.length > 10;
  }

  /**
   * Get the token from localStorage
   */
  public getAuthToken() {
    return localStorage.getItem(this.token_key);
  }

  /**
   * Singup request to create a new user
   *
   * @param user user object
   */
  public signup(user: SignupRequest) {
    const baseUrl: string = environment.baseUrl + 'auth/signup';

    return this.http.post<User>(baseUrl, user);
  }

}
