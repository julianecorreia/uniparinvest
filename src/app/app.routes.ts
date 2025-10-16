import { Routes } from '@angular/router';
import {Inicio} from './layout/inicio/inicio';
import {Dashboard} from './pages/dashboard/dashboard';
import {Tickers} from './pages/tickers/tickers';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio',
    component: Inicio,
    children: [
      { path: '', component: Dashboard },
      { path: 'tickers', component: Tickers },
    ]
  },
  { path: '**', redirectTo: 'inicio'},

];
