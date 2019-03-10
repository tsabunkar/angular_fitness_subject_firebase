import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable, of } from 'rxjs';
import { FidgetSpinnerService } from 'src/app/shared/components/fidget-spinner/fidget-spinner.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate: Date;
  isLoading: Observable<boolean> = of(false);

  constructor(
    private authService: AuthService,
    private fidgetSpinnerService: FidgetSpinnerService
  ) { }

  ngOnInit() {
    // !SPinner
    this.isLoading = this.fidgetSpinnerService.spinnerStateChanged;

    this.signupPersonShouldBeEighteenYears();

  }

  signupPersonShouldBeEighteenYears() {
    // logic - Person signup, should be min of years old, so limiting the date beyond 2001 and soon
    this.maxDate = new Date();
    console.log(this.maxDate.getFullYear() - 18);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    // Register new user
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
