import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FidgetSpinnerService } from 'src/app/shared/components/fidget-spinner/fidget-spinner.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: Observable<boolean> = of(false);

  constructor(
    private authService: AuthService,
    private fidgetSpinnerService: FidgetSpinnerService
  ) { }

  ngOnInit() {
    // !SPinner
    this.isLoading = this.fidgetSpinnerService.spinnerStateChanged;

    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}
