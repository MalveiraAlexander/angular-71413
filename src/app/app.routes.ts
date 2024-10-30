import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadComponent: () => import('./main/main.component').then(c => c.MainComponent), children: [
    { path: 'users', loadComponent: () => import('./main/pages/users/users.component').then(c => c.UsersComponent), title: 'Usuarios' },
    { path: 'users/add', loadComponent: () => import('./main/pages/user-add-edit/user-add-edit.component').then(c => c.UserAddEditComponent), title: 'Agregar Usuario'  },
    { path: 'user/:id', loadComponent: () => import('./main/pages/user/user.component').then(c => c.UserComponent), title: 'Usuario' },
    { path: 'user/:id/edit', loadComponent: () => import('./main/pages/user-add-edit/user-add-edit.component').then(c => c.UserAddEditComponent), title: 'Editar Usuario'  },
    { path: '', redirectTo: 'users', pathMatch: 'full' },
  ]},
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
