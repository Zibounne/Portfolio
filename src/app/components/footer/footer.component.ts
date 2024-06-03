import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})

export class FooterComponent implements OnInit {
  
  private lastScrollTop: number = 0;
  private header: HTMLElement | null = null;

  currentYear: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.updateYear();
    this.header = this.document.getElementById("footer");
  }
  
  updateYear() {
    this.currentYear = new Date().getFullYear();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {

    const scrollTop = this.document.documentElement.scrollTop;
  
    if (this.header) {
      if (scrollTop > this.lastScrollTop) {
        this.header.style.transform = 'translateY(100%)';
      } else {
        this.header.style.transform = 'translateY(0)';
      }
    }
  
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  } 

}