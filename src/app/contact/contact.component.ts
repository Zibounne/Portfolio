import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Portfolio | Contact");
  }
  
}