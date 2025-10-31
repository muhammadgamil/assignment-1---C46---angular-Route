import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [

  {
    path: '',
    component : HomeComponent,
    title : 'home' ,
  },
  {
    path: 'about',
    component : AboutComponent,
    title : 'about' ,
  },
  {
    path: 'portfolio',
    component : PortfolioComponent,
    title : 'portfolio' ,
  },
  {
    path: 'contact',
    component : ContactComponent,
    title : 'contact' ,

  },
  {
    path: 'notfound',
    component : NotfoundComponent,
    title: '404'
  },
  {
    path: '**',
    redirectTo : 'notfound'
  },
];
