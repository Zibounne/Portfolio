import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { ScrollService } from '../../services/scroll/scroll.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})

export class HomeComponent implements AfterViewInit {

  private sections: HTMLElement[] = [];
  private currentSectionIndex: number = 0;
  private isScrolling: boolean = false;
  
  constructor
  (
    private titleService: Title,
    private scrollService: ScrollService,
    @Inject(DOCUMENT) private document: Document
  )
  {
    this.titleService.setTitle("Portfolio | Home");
  }

  ngAfterViewInit(): void {
    this.sections = Array.from(this.document.querySelectorAll('section')) as HTMLElement[];
    this.document.addEventListener('wheel', (event: WheelEvent) => this.onMouseWheel(event), { passive: false });
  }

  private onMouseWheel(event: WheelEvent): void {
    event.preventDefault();
    if (event.deltaY > 0) {
      this.scrollToNextSection();
    } else {
      this.scrollToPreviousSection();
    }
  }

  private scrollToNextSection(): void {
    if (this.currentSectionIndex < this.sections.length - 1) {
      this.isScrolling = true;
      this.currentSectionIndex++;
      this.scrollService.scrollToSection(this.sections[this.currentSectionIndex].id);
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  private scrollToPreviousSection(): void {
    if (this.currentSectionIndex > 0) {
      this.isScrolling = true;
      this.currentSectionIndex--;
      this.scrollService.scrollToSection(this.sections[this.currentSectionIndex].id);
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

}