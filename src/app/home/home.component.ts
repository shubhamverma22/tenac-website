import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 3; // loops from 0 to 2
    }, 2000); // change every 2 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
