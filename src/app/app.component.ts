import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: '../styles/styles.css'
})

export class AppComponent {

}