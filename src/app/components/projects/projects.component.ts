import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})

export class ProjectsComponent {

  constructor( private titleService: Title ) {}

  ngOnInit(): void {this.titleService.setTitle("Portfolio | Projects");}

}