import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})

export class ProjectsComponent {

  private lastScrollTop: number = 0;
  private projectsArrow: HTMLElement | null = null;

  constructor
  (
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) 
  {

  }

  ngOnInit(): void {
    this.titleService.setTitle("Portfolio | Projects");
    this.projectsArrow = this.document.getElementById("projectsArrow");
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop = this.document.documentElement.scrollTop;

    if (this.projectsArrow) {
      if (scrollTop > this.lastScrollTop) {
        this.projectsArrow.style.visibility = 'hidden';
        this.projectsArrow.style.opacity = '0';
        this.projectsArrow.style.transition = 'visibility 0s, opacity 0.5s linear';
      } else {
        this.projectsArrow.style.visibility = 'visible';
        this.projectsArrow.style.opacity = '1';
      }
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

}