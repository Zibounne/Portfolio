import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})

export class FooterComponent implements OnInit {
  
  currentYear: number = 0;

  ngOnInit() {
    this.updateYear();
  }
  
  updateYear() {
    this.currentYear = new Date().getFullYear();
  }

}