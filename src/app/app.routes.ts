import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { notAuthGuard } from './guards/not-auth.guard';

export const routes: Routes = [
  {
    path: 'main', children:
      [
        { path: 'home', loadComponent: () => import('./main/pages/main/main.component').then(c => c.MainComponent), title: 'Clase 2 - Inicio' },
        { path: 'users', children:
          [
            { path: '', loadComponent: () => import('./main/pages/users/users.component').then(c => c.UsersComponent), title: 'Clase 2 - Usuarios' },
            { path: ':id', loadComponent: () => import('./main/pages/users/user-detail/user-detail.component').then(c => c.UserDetailComponent), title: 'Clase 2 - Usuario' }
          ]
        },
        { path: 'roles', data: { type: 'Admin' }, loadComponent: () => import('./main/pages/roles/roles.component').then(c => c.RolesComponent), title: 'Clase 2 - Roles' },
        { path: 'roles2', data: { type: 'Default' }, loadComponent: () => import('./main/pages/roles/roles.component').then(c => c.RolesComponent), title: 'Clase 2 - Roles' }
      ],
    canMatch: [notAuthGuard]
  },
  {
    path: 'auth', children: [
      { path: 'login', loadComponent: () => import('./auth/pages/login/login.component').then(c => c.LoginComponent), title: 'Ingreso' },
      { path: 'register', loadComponent: () => import('./auth/pages/register/register.component').then(c => c.RegisterComponent), title: 'Registro' },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ],
    canMatch: [authGuard]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
