import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  currentUrl: string = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.currentUrl = this.document.location.pathname;
    console.log(this.currentUrl);
  }

  isActive(url: string): boolean {
    return this.currentUrl === url;
  }

}