import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './projects.component.html',
})

export class ProjectsComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Portfolio | Projects");
  }

}
