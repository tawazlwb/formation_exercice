import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly BASE_URL = 'http://localhost:3000/';

  // user: any = null;
  connected = false;

  constructor(private http: HttpClient) {}

  getUser(username: string, password: string) {
    return this.http
      .get<any[]>(this.BASE_URL + 'users', {
        params: { username, password },
      })
      .pipe(
        tap(() => (this.connected = true))
        // tap(response => this.user = response[0])
      );
  }
}
