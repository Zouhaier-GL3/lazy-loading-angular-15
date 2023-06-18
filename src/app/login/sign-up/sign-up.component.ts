import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor( private router:Router) {}
  ngOnInit(): void {}

  public RegistrationPage(){
    this.router.navigate(['/regster']);
    console.log('go to registration page');
  }
  public LoginPage(){
    this.router.navigate(['/']);
    console.log('go to home page');
  }
}
