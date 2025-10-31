import { Component, signal } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';

@Component({
  selector: 'app-root',
  imports: [AboutComponent,PortfolioComponent,ContactComponent,HomeComponent , FooterComponent,Footer2Component , NavbarComponent , NotfoundComponent , RouterOutlet , RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal ("app1") ;
}
