import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  award: OwlOptions = {
      loop: true,
      margin: 30,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      smartSpeed: 1000,
      slideTransition: 'linear',
      nav: true,
      dots: false,
      center: true,
      responsive: {
        1000: {
          items: 6
        }
      }
  }; 
  selectedIndustry: string = 'Mining';
  selectedBackground: string = "url('/assets/images/banner/mining-bg.png') center/cover no-repeat";

  industries = [
    {
      name: 'Mining',
      description: 'Reshaping mining landscapes with precision and power, leading a digital transformation that unlocks efficiency.',
      background: "url('/assets/images/banner/mining-bg.png') center/cover no-repeat"
    },
    {
      name: 'Logistics',
      description: 'Leveraging the digital technology to provide real-time planning and routing of vehicles in transit.',
      background: "url('/assets/images/banner/logistic-industry.png') center/cover no-repeat"
    },
    {
      name: 'Education',
      description: 'Emerging opportunities in education, crafting e-platforms for personalized learning models and adaptive learning.',
      background: "url('/assets/images/banner/education-industry.png') center/cover no-repeat"
    },
    {
      name: 'Manufacturing',
      description: 'From smart automation to end-to-end logistics, redefining efficiency excellence while optimizing operations with precision.',
      background: "url('/assets/images/banner/manufacturing-industry.png') center/cover no-repeat"
    }
  ];

  selectIndustry(industry: any): void {
    this.selectedIndustry = industry.name;
    this.selectedBackground = industry.background;
  }
}
