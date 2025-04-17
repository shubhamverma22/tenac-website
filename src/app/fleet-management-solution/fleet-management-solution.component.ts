import { Component } from '@angular/core';

@Component({
  selector: 'app-fleet-management-solution',
  templateUrl: './fleet-management-solution.component.html',
  styleUrls: ['./fleet-management-solution.component.scss']
})
export class FleetManagementSolutionComponent {
  factoryFeatureData= {
    heading: 'Fleet Optimization',
    featureNumber: '01',
    largeImg: '/assets/images/banner/fms-img1.png',

    icon1: '/assets/images/icons/route.png',
    subHeading1: 'Route Planning & Optimization',
    fetureDescription1: 'Reduce fuel consumption and Utilize advanced algorithms to plan the most efficient routes for your mining fleet.',

    icon2: '/assets/images/icons/fule.png',    
    subHeading2: 'Fuel Efficiency Strategies',
    fetureDescription2: 'Monitor fuel consumption patterns and provide actionable insights to reduce overall fuel costs.',

    icon3: '/assets/images/icons/schedule-icon.png',    
    subHeading3: 'Dynamic Scheduling',
    fetureDescription3: 'Improve operational agility by automatically adjusting schedules based on unexpected events or delays.',
  }

  factoryFeatureData2= {
    heading: 'Safety Management',
    featureNumber: '02',
    largeImg: '/assets/images/banner/fms-img2.png',

    icon1: '/assets/images/icons/drive.png',
    subHeading1: 'Driver Behavior Monitoring',
    fetureDescription1: 'Monitor critical factors and provide targeted feedback and coaching to drivers for continuous improvement in safety.',

    icon2: '/assets/images/icons/incident.png',    
    subHeading2: 'Real-time Incident Alerts',
    fetureDescription2: 'Receive instant alerts and enable quick response and assistance to drivers in distress, minimizing the impact of safety breaches.',

    icon3: '/assets/images/icons/compline-management.png',    
    subHeading3: 'Compliance Management',
    fetureDescription3: 'Monitor and manage compliance with driving hours, maintenance requirements, and other legal guidelines.',
  }

  factoryFeatureData3= {
    heading: 'Maintenance Excellence',
    featureNumber: '03',
    largeImg: '/assets/images/banner/fms-img3.png',

    icon1: '/assets/images/icons/predictive-maintainance.png',
    subHeading1: 'Predictive Maintenance ',
    fetureDescription1: 'Prevent costly breakdowns and increase the lifespan of your vehicles  through proactive intervention.',

    icon2: '/assets/images/icons/schedule.png',    
    subHeading2: 'Automated Work Order Management',
    fetureDescription2: 'Streamline the maintenance process with automated work order generation and tracking.',

    icon3: '/assets/images/icons/spare-parts.png',    
    subHeading3: 'Spare Parts Inventory Control',
    fetureDescription3  : 'Maintain an organized inventory of spare parts and implement inventory strategies to minimize disruptions.',
  }

}
