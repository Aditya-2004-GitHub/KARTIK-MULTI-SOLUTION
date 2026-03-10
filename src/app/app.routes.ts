import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About Us' },
  { path: 'services', component: Services, title: 'Our Services' },
  { path: 'projects', component: Projects, title: 'Our Projects' },
  { path: 'contact', component: Contact, title: 'Contact Us' },

  { path: '**', component: NotFoundPage, title: 'Page Not Found', data: { hideLayout: true } },
];
