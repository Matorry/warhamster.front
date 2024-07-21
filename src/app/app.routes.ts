import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage) },
  { path: 'army-list/:id', loadComponent: () => import('./pages/army-list-detail/army-list-detail.page').then(m => m.ArmyListDetailPage) },
  { path: 'match/:id', loadComponent: () => import('./pages/match-detail/match-detail.page').then(m => m.MatchDetailPage) },
  { path: 'tournament/:id', loadComponent: () => import('./pages/tournament-detail/tournament-detail.page').then(m => m.TournamentDetailPage) }
];
