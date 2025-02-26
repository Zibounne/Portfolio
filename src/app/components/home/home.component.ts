import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Portfolio | Home");
  }

}
