import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './contact.component.html',
})

export class ContactComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Portfolio | Contact");
  }
  
}
