import { inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserRepoService } from './user.repo.service';

export interface State {
  token: string | null
  currentUser: User | null
}

const initialState: State = {
  token: null,
  currentUser: null
}

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private userRepo = inject(UserRepoService);

  private state$ = new BehaviorSubject<State>(initialState)

  jwtDecode = jwtDecode;

  getState(): Observable<State> {
    return this.state$.asObservable();
  }

  get state(): State {
    return this.state$.value;
  }

  setLogin(token: string) {
    const currentPayload = this.jwtDecode(token) as { id: string, role: string }
    this.userRepo.getUserById(currentPayload.id).subscribe({
      next: (user) => {
        this.state$.next({ ...this.state$.value, currentUser: user })
      },
      error: (error: Error) => { console.error(error.message) },
      complete: () => { console.log("Login process complete") }
    })
  }

  setLogout() {
    this.state$.next(initialState)
  }
}
