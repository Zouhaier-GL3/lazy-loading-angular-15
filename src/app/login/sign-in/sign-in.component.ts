import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loading: boolean = false;
  constructor( private router:Router) {}

  ngOnInit(): void {}

  public RegistrationPage(){
    this.router.navigate(['/regster']);
    console.log('go to registration page');
  }
  public HomePage(){
    this.router.navigate(['/layouts']);
    console.log('go to home page');
  }
}
