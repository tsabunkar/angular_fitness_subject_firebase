import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AuthData } from './models/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { FidgetSpinnerService } from 'src/app/shared/components/fidget-spinner/fidget-spinner.service';


@Injectable({
  providedIn: 'root' // Providing the service in rootMOdule,
  // make sures that we are using single ton/same instances of AuthService
})
export class AuthService {

  // private user: User;
  public userAuthenticationChanged = new Subject<boolean>();
  private isAuth = false;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private ngFireAuth: AngularFireAuth,
    private fidgetSpinnerService: FidgetSpinnerService
  ) { }

  registerUser(authData: AuthData) {
    /* this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }; */
    // !invoking the spinner
    this.fidgetSpinnerService.spinnerStateChanged.next(true);

    this.ngFireAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);

        // navigate after registering the user
        // this.navigateToTraining();
      }).catch((err) => {
        console.log(err);
        this.snackBar.open(err.message, null, { duration: 3000 });
      }).finally(() => {
        // !invoking the spinner
        this.fidgetSpinnerService.spinnerStateChanged.next(false);
      });

  }

  login(authData: AuthData) {
    /*  this.user = {
       email: authData.email,
       userId: Math.round(Math.random() * 10000).toString()
     }; */
    // !invoking the spinner
    this.fidgetSpinnerService.spinnerStateChanged.next(true);

    this.ngFireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);

        // navigate after login the user
        // this.navigateToTraining();
      }).catch((err) => {
        console.log(err);
        this.snackBar.open(err.message, null, { duration: 3000 });
      }).finally(() => {
        // !invoking the spinner
        this.fidgetSpinnerService.spinnerStateChanged.next(false);
      });

  }

  logout() {
    this.ngFireAuth.auth.signOut();
  }

  /*   getUser() {
      return { ...this.user };
    } */

  isAuthenticated() {
    // return this.user != null;
    return this.isAuth;
  }

  /* private navigateToTraining() {
    this.isAuth = true;
    this.userAuthenticationChanged.next(true); // logged in
    this.router.navigate(['/training']);
  }
 */
  initAuthListener() { // !We need to invoke this method, when application is first started
    // authState-> is observable, it will emit the event whenever the authentication status has been changed
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {  // if truthy user has logged in or registered
        this.isAuth = true;
        this.userAuthenticationChanged.next(true); // logged in
        this.router.navigate(['/training']);
      } else {
        // this.user = null;
        this.isAuth = false;
        this.userAuthenticationChanged.next(false); // logged out
        // navigate after logout the user
        this.router.navigate(['/signin']);
      }
    });
  }

}
