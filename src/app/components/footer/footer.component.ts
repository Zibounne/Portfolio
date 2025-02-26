import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})

export class FooterComponent {

  currentYear: number = 0;

  ngOnInit() {
    this.updateYear();
  }
  
  updateYear() {
    this.currentYear = new Date().getFullYear();
  }
  
}
