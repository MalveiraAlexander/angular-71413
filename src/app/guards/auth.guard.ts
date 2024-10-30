import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  let router = inject(Router);
  let token = localStorage.getItem('clase2-token');
  if (token && token === 'algo') {
    router.navigate(['/main/home']);
    return false;
  } else {
    return true;
  }
};
