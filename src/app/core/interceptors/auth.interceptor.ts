import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StateService } from '../services/state.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const stateService = inject(StateService);
  const token = stateService.state.token

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
