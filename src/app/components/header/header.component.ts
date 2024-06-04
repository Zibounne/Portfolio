import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  private lastScrollTop: number = 0;
  private header: HTMLElement | null = null;

  constructor
  (
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) 
  {

  }

  ngOnInit(): void {
    this.header = this.document.getElementById("header");
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop = this.document.documentElement.scrollTop;

    if (this.header) {
      if (scrollTop > this.lastScrollTop) {
        this.header.style.transform = 'translateY(-100%)';
      } else {
        this.header.style.transform = 'translateY(0)';
      }
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
  
}