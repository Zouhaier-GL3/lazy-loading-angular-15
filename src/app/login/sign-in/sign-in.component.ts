import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loginForm!: FormGroup;
  submitted = false;
  loading: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.loginForm = this.formBuilder.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.submitted = true;
    this.loading = true;
    // console.log(this.password?.errors?.['required']);
    if (!this.loginForm.value.identifier || !this.loginForm.value.password) {
      this.loading = false;
      return;
    }
    this.authService
      .authentifiction(
        this.loginForm.value.identifier,
        this.loginForm.value.password
      )
      .toPromise()
      .then(
        (res) => {
          this.router.navigate(['/home']);
        },
        (err: HttpErrorResponse) => {
        }
      );
  }
}
