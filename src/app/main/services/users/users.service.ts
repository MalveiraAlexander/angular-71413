import { inject, Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  private http = inject(HttpClient);
  private readonly URL: string = 'http://localhost:3000/';

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}users`);
  }

  searchUser(query: string): User[] {
    return [];
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.URL}users`, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.URL}users/${id}`);
  }

  editUser(user: User, id: string): Observable<User> {
    return this.http.put<User>(`${this.URL}users/${id}`, user);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.URL}users/${id}`);
  }
}
