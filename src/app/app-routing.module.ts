import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { TrainingComponent } from './training/training.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [NoAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard] },
  { path: 'signin', component: LoginComponent, canActivate: [NoAuthGuard] },

  // { path: 'training', component: TrainingComponent },
  // ?Can we have to protect this /training route, so using guard ->
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // !Exporting the RouterModule where we have configured our Routes
  // !This will be indirectly be exporting AppRoutingModule in AppModule
})
export class AppRoutingModule {

}
