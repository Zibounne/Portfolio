import { AfterViewInit, Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { DOCUMENT } from '@angular/common';
import { ScrollSectionService } from './services/scroll/section/scroll-section.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: '../styles/styles.css'
})

export class AppComponent implements AfterViewInit {

  ////////////////////////////////// Scroll Section //////////////////////////////////

  private sections: HTMLElement[] = [];
  private currentSectionIndex: number = 0;
  private isScrolling: boolean = false;
  
  constructor
  (
    private scrollSectionService: ScrollSectionService,
    @Inject(DOCUMENT) private document: Document
  )
  {

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
      this.scrollSectionService.scrollToSection(this.sections[this.currentSectionIndex].id);
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  private scrollToPreviousSection(): void {
    if (this.currentSectionIndex > 0) {
      this.isScrolling = true;
      this.currentSectionIndex--;
      this.scrollSectionService.scrollToSection(this.sections[this.currentSectionIndex].id);
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////

}