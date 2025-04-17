import { Component } from '@angular/core';

@Component({
  selector: 'app-fule-monitor-detail',
  templateUrl: './fule-monitor-detail.component.html',
  styleUrls: ['./fule-monitor-detail.component.scss']
})
export class FuleMonitorDetailComponent {
  factoryFeatureData= {
    heading: 'Factual Fuel Insights',
    featureNumber: '01',
    largeImg: '/assets/images/banner/fmd-img1.png',

    icon1: '/assets/images/icons/fmd-icon1.png',
    subHeading1: 'Live Fuel Tracking',
    fetureDescription1: 'Monitor fuel levels in real-time, ensuring accurate and up-to-the-minute data for effective management.',

    icon2: '/assets/images/icons/fmd-icon2.png',    
    subHeading2: 'Fuel Efficiency Analytics',
    fetureDescription2: 'Analyze historical fuel usage data to identify trends and implement strategies for improved efficiency across your operations.',
  }

  factoryFeatureData2= {
    heading: 'Telematics Integration',
    featureNumber: '02',
    largeImg: '/assets/images/banner/fmd-img2.png',

    icon1: '/assets/images/icons/fmd-icon3.png',
    subHeading1: 'Fuel Consumption Patterns',
    fetureDescription1: 'Understand how driving behavior, vehicle condition, and route selections impact fuel usage, enabling data-driven optimization.',

    icon2: '/assets/images/icons/fmd-icon4.png',    
    subHeading2: 'Performance Optimization',
    fetureDescription2: 'Implement targeted strategies to optimize driving habits and reduce fuel wastage, driving down operational costs.',
  }

  factoryFeatureData3= {
    heading: 'Cost-Saving Strategies',
    featureNumber: '03',
    largeImg: '/assets/images/banner/fmd-img3.png',

    icon1: '/assets/images/icons/fmd-icon5.png',
    subHeading1: 'Route Optimization',
    fetureDescription1: 'Plan fuel-efficient routes to minimize travel time and costs, ensuring maximum profitability.',

    icon2: '/assets/images/icons/fmd-icon6.png',    
    subHeading2: 'Idle Time Management',
    fetureDescription2: 'Identify and address excessive idling to save on fuel expenses, boosting your bottom line.',
  }

  factoryFeatureData4= {
    heading: 'Environmental Sustainability',
    featureNumber: '03',
    largeImg: '/assets/images/banner/fmd-img4.png',

    icon1: '/assets/images/icons/fmd-icon7.png',
    subHeading1: 'Carbon Emission Tracking',
    fetureDescription1: 'Monitor and reduce carbon emissions for a greener, more environmentally-conscious mining fleet.',

    icon2: '/assets/images/icons/fmd-icon8.png',    
    subHeading2: 'Environmental Impact Reports',
    fetureDescription2: 'Receive valuable insights into your fleets environmental impact, empowering you to work towards ambitious sustainability goals.',
  }
}
