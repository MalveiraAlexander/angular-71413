import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const notAuthGuard: CanMatchFn = (route, segments) => {
  let router = inject(Router);
  let token = localStorage.getItem('clase2-token');
  if (token && token === 'algo') {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
