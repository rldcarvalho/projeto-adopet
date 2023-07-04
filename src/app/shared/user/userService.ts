import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.API, user);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.get<User>(url);
  }

  getUserByEmail(email: string): Observable<User | null> {
    const params = { email };

    return this.http.get<User[]>(this.API, { params }).pipe(
      map((users: User[]) => {
        const matchedUsers = users.filter(user => user.email === email);
        return matchedUsers.length > 0 ? matchedUsers[0] : null;
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.API}/${id}`;
    return this.http.delete<void>(url);
  }
}
