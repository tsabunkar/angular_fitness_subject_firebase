import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AuthData } from './models/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


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
    private ngFireAuth: AngularFireAuth
  ) { }

  registerUser(authData: AuthData) {
    /* this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }; */
    this.ngFireAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);

        // navigate after registering the user
        this.navigateToTraining();
      }).catch((err) => {
        console.log(err);
      });
  }

  login(authData: AuthData) {
    /*  this.user = {
       email: authData.email,
       userId: Math.round(Math.random() * 10000).toString()
     }; */
    this.ngFireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);

        // navigate after login the user
        this.navigateToTraining();
      }).catch((err) => {
        console.log(err);
      });

  }

  logout() {
    // this.user = null;
    this.isAuth = false;
    this.userAuthenticationChanged.next(false); // logged out
    // navigate after logout the user
    this.router.navigate(['/signin']);
  }

/*   getUser() {
    return { ...this.user };
  } */

  isAuthenticated() {
    // return this.user != null;
    return this.isAuth;
  }

  private navigateToTraining() {
    this.isAuth = true;
    this.userAuthenticationChanged.next(true); // logged in
    this.router.navigate(['/training']);
  }

}
