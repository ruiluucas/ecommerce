import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { SigninComponent } from './features/signin/signin.component';
import { ProfileComponent } from './features/profile/profile.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
