import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  //title: string = "Portfolio | Home";
  
  constructor(private titleService:Title) {
    this.titleService.setTitle("Portfolio | Home");
  }

}