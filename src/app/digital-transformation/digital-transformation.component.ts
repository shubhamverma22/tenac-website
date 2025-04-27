import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-digital-transformation',
  templateUrl: './digital-transformation.component.html',
  styleUrls: ['./digital-transformation.component.scss']
})
export class DigitalTransformationComponent {
  services: OwlOptions = {
      loop: true,
      margin: 20,
      autoplay: true,
      nav: false,
      dots: true,
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
}
