import { ConfigService } from './../../cors/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public AppParameters;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.AppParameters = this.configService.config;
    console.log(this.configService.config.apiUrl)
  }

  authentifiction(identifier: string, password: string): Observable<User> {
    return this.http
      .post<User>(this.configService.config.apiUrl + 'users/signin', {
        identifier,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        })
      );
  }

  getToken(): User {
    return  JSON.parse(localStorage.getItem('user') || '{}')
  }
}
export interface User {
  id?: string;
  identifier?: string;
  token?: string;
}
