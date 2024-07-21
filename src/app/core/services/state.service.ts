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
  private state$ = new BehaviorSubject<State>(this.loadState());

  getState(): Observable<State> {
    return this.state$.asObservable();
  }

  get state(): State {
    return this.state$.value;
  }

  setLogin(token: string): void {
    localStorage.setItem('authToken', token);
    const currentPayload = jwtDecode(token) as { id: string; role: string };
    this.userRepo.getUserById(currentPayload.id).subscribe({
      next: (user) => {
        this.state$.next({ token, currentUser: user });
      },
      error: (error: Error) => {
        console.error(error.message);
      }
    });
  }

  setLogout() {
    localStorage.removeItem('authToken');
    this.state$.next(initialState);
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
        }
      });
      return { token, currentUser };
    }
    return initialState;
  }
}
