import {NgModule} from '@angular/core';
import {AuthGuard} from '../../core/guards/auth.guard';
import {FormsModule} from '@angular/forms';
import {UserRouting} from './user-routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from '../../core/services/authentication.service';
import {TokenInterceptor} from '../../core/interceptors/token.interceptor';
import {RequestInterceptor} from '../../core/interceptors/request.interceptor';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    UserRouting
  ],
  providers: [
    AuthenticationService,
    HttpClientModule,
    AuthGuard,
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
export class UserModule {
}
