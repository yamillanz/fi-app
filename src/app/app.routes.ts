import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'notfound',
    loadComponent() {
      return import('./shared/notfound/notfound.component').then((m) => m.NotfoundComponent);
    },
  },
  {
    path: 'homelogin',
    loadComponent() {
      return import('./front-office/pages/home-office/home-office.component').then((m) => m.HomeOfficeComponent);
    },
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        loadComponent() {
          return import('./front-office/invoices-list/invoices-list.component').then((m) => m.InvoicesListComponent);
        },
        canActivate: [authGuard],
      },
      {
        path: 'scan-invoice',
        loadComponent() {
          return import('./front-office/pages/scan-invoice/scan-invoice.component').then((m) => m.ScanInvoiceComponent);
        },
        canActivate: [authGuard],
      },
    ],
  },
  { path: '**', redirectTo: '/notfound' },
];
