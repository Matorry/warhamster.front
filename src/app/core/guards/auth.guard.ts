import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StateService } from '../services/state.service';

export const authGuard: CanActivateFn = (_route, _stateRoute) => {
  const stateService = inject(StateService);
  const router = inject(Router);
  const state = stateService.state;

  if (!state.token) {
    router.navigate(['/login']);
    return false;
  } else {
    if (_stateRoute.url === "/login" || _stateRoute.url === "/register") {
      router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
};
