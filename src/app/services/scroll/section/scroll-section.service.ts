import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScrollSectionService {

  private section: HTMLElement | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string) : void {
    this.section = this.document.getElementById(sectionId);
    if (this.section) {
      this.section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}