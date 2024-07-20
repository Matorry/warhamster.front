import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserCreateDto, UserUpdateDto } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRepoService {
  private apiUrl = 'http://localhost:7373/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  register(userData: UserCreateDto): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, userData);
  }

  login(userData: { email: string, pswd: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, userData);
  }

  updateUser(id: string, userData: UserUpdateDto): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, userData);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
