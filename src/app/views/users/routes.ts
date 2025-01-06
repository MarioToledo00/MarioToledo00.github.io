import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
    data: {
      title: 'Usuarios'
    }
  }
];
