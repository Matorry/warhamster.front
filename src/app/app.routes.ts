import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage), canActivate: [authGuard] },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage), canActivate: [authGuard] },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage), canActivate: [authGuard] },
  { path: 'army-list/:id', loadComponent: () => import('./pages/army-list-detail/army-list-detail.page').then(m => m.ArmyListDetailPage), canActivate: [authGuard] },
  { path: 'match/:id', loadComponent: () => import('./pages/match-detail/match-detail.page').then(m => m.MatchDetailPage), canActivate: [authGuard] },
  { path: 'tournament/:id', loadComponent: () => import('./pages/tournament-detail/tournament-detail.page').then(m => m.TournamentDetailPage), canActivate: [authGuard] }
];
