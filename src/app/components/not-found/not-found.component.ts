import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [

  ],
  templateUrl: './not-found.component.html',
})

export class NotFoundComponent implements AfterViewInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Portfolio | 404");
  }

  ngAfterViewInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let count = 3;
    const timer = setInterval(() => {
      count--;
      if (countdownElement) {
        countdownElement.textContent = count.toString();
      }

      if (count <= 0) {
        clearInterval(timer);
        window.location.href = '';
      }
    }, 1000);
  }

}
