import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'reactive', loadComponent: () => import('./reactive/reactive.component').then(c => c.ReactiveComponent), title: 'Formulario Reactivo' },
  { path: 'template', loadComponent: () => import('./template/template.component').then(c => c.TemplateComponent), title: 'Formulario Template' },
  { path: '', redirectTo: 'reactive', pathMatch: 'full' }
];
