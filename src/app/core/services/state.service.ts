import { inject, Injectable } from '@angular/core';

import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserRepoService } from './user.repo.service';

export interface State {
  token: string | null;
  currentUser: User | null;
}

const initialState: State = {
  token: null,
  currentUser: null
};

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private userRepo = inject(UserRepoService);
  private state$ = new BehaviorSubject<State>(initialState);

  getState(): Observable<State> {
    return this.state$.asObservable();
  }

  get state(): State {
    return this.state$.value;
  }

  setLogin(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      localStorage.setItem('authToken', token);
      const currentPayload = jwtDecode(token) as { id: string; role: string };
      this.userRepo.getUserById(currentPayload.id).subscribe({
        next: (user) => {
          this.state$.next({ token, currentUser: user });
          resolve();
        },
        error: (error: Error) => {
          console.error(error.message);
          reject(error);
        }
      });
    });
  }

  setLogout() {
    localStorage.removeItem('authToken');
    this.state$.next(initialState);
  }

  checkLogin() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.setLogin(token).catch(err => {
        console.error('Error during login check:', err);
        this.setLogout();
      });
    }
  }

  private loadState(): State {
    const token = localStorage.getItem('authToken');
    if (token) {
      const currentPayload = jwtDecode(token) as { id: string; role: string };
      let currentUser: User | null = null;
      this.userRepo.getUserById(currentPayload.id).subscribe({
        next: (user) => {
          currentUser = user;
          this.state$.next({ token, currentUser });
        },
        error: (error: Error) => {
          console.error(error.message);
          this.setLogout();
        }
      });
      return { token, currentUser };
    }
    return initialState;
  }
}
