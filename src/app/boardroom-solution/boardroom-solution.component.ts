import { Component } from '@angular/core';

@Component({
  selector: 'app-boardroom-solution',
  templateUrl: './boardroom-solution.component.html',
  styleUrls: ['./boardroom-solution.component.scss']
})
export class BoardroomSolutionComponent {
  factoryFeatureData= {
    heading: 'Collaborative Digital Workspace',
    featureNumber: '01',
    largeImg: '/assets/images/banner/bs-img2.png',

    icon1: '/assets/images/icons/bs-icon1.png',
    subHeading1: 'Interactive Display Boards',
    fetureDescription1: 'Enhance boardroom collaboration with large interactive displays, allowing participants to share content, annotate, and engage in real-time discussions seamlessly.',

    icon2: '/assets/images/icons/bs-icon2.png',    
    subHeading2: 'Wireless Presentation Capabilities',
    fetureDescription2: 'Enable seamless wireless presentation from various devices, ensuring a smooth and efficient flow of information during boardroom meetings.',
  }

  factoryFeatureData2= {
    heading: 'Intelligent Meeting Management',
    featureNumber: '02',
    largeImg: '/assets/images/banner/bs-img3.png',

    icon1: '/assets/images/icons/bs-icon3.png',
    subHeading1: 'Automated Agenda and Minutes',
    fetureDescription1: 'Streamline meeting processes with automated agenda generation, note-taking, and minutes distribution, improving productivity and transparency.',

    icon2: '/assets/images/icons/bs-icon4.png',    
    subHeading2: 'Remote Participation Tools',
    fetureDescription2: 'Foster inclusive discussions by enabling remote participation through video conferencing, screen sharing, and real-time collaboration tools.',
  }

  factoryFeatureData3= {
    heading: 'Advanced Analytics and Insights',
    featureNumber: '03',
    largeImg: '/assets/images/banner/bs-img4.png',

    icon1: '/assets/images/icons/bs-icon5.png',
    subHeading1: 'Decision Support Analytics ',
    fetureDescription1: 'Leverage data-driven insights and predictive analytics to support informed decision-making, enabling strategic planning and resource optimization.',

    icon2: '/assets/images/icons/bs-icon6.png',    
    subHeading2: 'Performance Reporting',
    fetureDescription2: 'Monitor institutional performance metrics and generate comprehensive reports for data-driven decision-making and continuous improvement.',
  }
}
