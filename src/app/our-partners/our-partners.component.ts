import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
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
}
