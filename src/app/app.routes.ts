import { Routes } from '@angular/router';
import { HomeComponent } from './features/fournisseur/pages/home/home.component';
import { CreateComponent } from './features/fournisseur/pages/create/create.component';

export const routes: Routes = [
  {
    path: 'fournisseurs',
    loadComponent: () => HomeComponent
  },
  {
    path: 'fournisseurs/create',
    loadComponent: () => CreateComponent
  }
];
