import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: MainComponent, title: 'Clase 2' },
  { path: 'users', component: UsersComponent, title: 'Clase 2 - Usuarios' },
  { path: 'roles', component: RolesComponent, title: 'Clase 2 - Roles' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: 'Clase 2 - Pagina no encontrada' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
