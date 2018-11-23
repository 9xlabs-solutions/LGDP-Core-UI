import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRouting} from './core-routing';
import {LoginComponent} from './components/auth/login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './services/authentication.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {RequestInterceptor} from './interceptors/request.interceptor';
import {SignupComponent} from './components/auth/signup/signup.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    CoreRouting
  ],
  providers: [
    AuthenticationService,
    HttpClientModule,
    // AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
}
