import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {SignupComponent} from './components/auth/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [!AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CoreRouting {
}


