  
import { Routes } from '@angular/router';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: home },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];