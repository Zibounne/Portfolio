import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
})

export class AboutComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Portfolio | About");
  }

}