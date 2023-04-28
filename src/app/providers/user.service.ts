import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly BASE_URL = environment.apiUrl;

  // user: any = null;
  connected = true;

  constructor(private http: HttpClient) {}

  getUser(username: string, password: string) {
    return this.http
      .get<IUser[]>(this.BASE_URL + 'users', {
        params: { username, password },
      })
      .pipe(
        switchMap((response) => {
          const isConnected = response.length === 1;
          if (isConnected) return of(true);
          else return throwError(() => new Error('No user found'));
        }),
        tap(() => (this.connected = true))
        // tap(response => this.user = response[0])
      );
  }
}
