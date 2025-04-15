import { Component } from '@angular/core';

@Component({
  selector: 'app-predictive-maintenance',
  templateUrl: './predictive-maintenance.component.html',
  styleUrls: ['./predictive-maintenance.component.scss']
})
export class PredictiveMaintenanceComponent {
  factoryFeatureData= {
    heading: 'Proactive Equipment Reliability',
    featureNumber: '01',
    largeImg: '/assets/images/predictive/proactive-equip.png',

    icon1: '/assets/images/icons/predictive-analysis.png',
    subHeading1: 'Predictive Analytics',
    fetureDescription1: 'Utilize advanced analytics to predict equipment failures before they occur, minimizing unplanned downtime.',

    icon2: '/assets/images/icons/cost-effective.png',    
    subHeading2: 'Cost-Effective Maintenance',
    fetureDescription2: 'Optimize maintenance schedules based on predictive insights, reducing costs and extending equipment lifespan.',
  }

  factoryFeatureData2= {
    heading: 'Seamless Integration',
    featureNumber: '02',
    largeImg: '/assets/images/operational-optimize.png',

    icon1: '/assets/images/icons/iot.png',
    subHeading1: 'IoT Sensors',
    fetureDescription1: 'Deploy smart sensors to gather real-time data, creating a connected ecosystem for predictive maintenance.',

    icon2: '/assets/images/icons/cloud-based.png',    
    subHeading2: 'Cloud-Based Solutions',
    fetureDescription2: 'Leverage cloud-based solutions for scalable and accessible predictive maintenance data storage and analysis.',
  }

  factoryFeatureData3= {
    heading: 'User-Friendly Interface and Accessibility',
    featureNumber: '03',
    largeImg: '/assets/images/predictive/user-friendly-interface.png',

    icon1: '/assets/images/icons/capability.png',
    subHeading1: 'Intuitive Dashboards',
    fetureDescription1: 'Access real-time and predictive maintenance insights through customizable, intuitive dashboards.',

    icon2: '/assets/images/icons/mobile-assibility.png',    
    subHeading2: 'Mobile Accessibility',
    fetureDescription2: 'Monitor equipment health remotely with mobile-compatible interfaces for on-the-go insights.',
  }

  factoryFeatureData4= {
    heading: 'State-of-the-Art Technology Features',
    featureNumber: '04',
    largeImg: '/assets/images/predictive/state-of-art.png',

    icon1: '/assets/images/icons/artificial.png',
    subHeading1: 'Machine Learning Algorithms',
    fetureDescription1: 'Harness machine learning for continuous improvement in predictive maintenance accuracy.',

    icon2: '/assets/images/icons/blockchaining.png',    
    subHeading2: 'Augmented Reality Maintenance Guides',
    fetureDescription2: 'Provide technicians with AR-based maintenance guides for efficient and error-free repairs.',
  }
}
