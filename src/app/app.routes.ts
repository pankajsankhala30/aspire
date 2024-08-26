import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { CreditComponent } from './credit/credit.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect root to dashboard
  {
    path: 'dashboard',
    component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'credit', component: CreditComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'cards', pathMatch: 'full' }, // Default child route
    ],
  },
];
