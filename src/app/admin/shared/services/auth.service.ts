import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  get token(): string {
    return '';
  }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    return !this.token;
  }

  private setToken(response) {
    console.log(response)
  }
}
