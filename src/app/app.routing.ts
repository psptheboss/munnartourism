import { Routes, RouterModule,CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuardGuard } from './auth-guard.guard';
export const routes: Routes = [
  
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
