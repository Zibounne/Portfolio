import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  private lastScrollTop: number = 0;
  private header: HTMLElement | null = null;

  currentUrl: string = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.currentUrl = this.document.location.pathname;
    this.header = this.document.getElementById("header");
  }

  isActive(url: string): boolean {
    return this.currentUrl === url;
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