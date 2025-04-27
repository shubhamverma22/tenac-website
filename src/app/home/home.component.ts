import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentIndex = 0;
  intervalId: any;
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    center: true,
    responsive: {
      1000: {
        items: 6
      }
    }
  };
  innovation: OwlOptions = {
    loop: true,
    margin: 2,
    autoplay: true,
    nav: false,
    dots: false,
    center: true,
    responsive: {
      1200: {
        items: 4
      },
      1000: {
        items: 3
      },
      767: {
        items: 1,
      }
    }
  };
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 3; // loops from 0 to 2
    }, 2000); // change every 2 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
