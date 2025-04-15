import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-factory',
  templateUrl: './smart-factory.component.html',
  styleUrls: ['./smart-factory.component.scss']
})
export class SmartFactoryComponent {
  factoryFeatureData= {
    heading: 'Seamless Automation',
    featureNumber: '01',
    largeImg: '/assets/images/seamless-automation.png',

    icon1: '/assets/images/icons/robotic.png',
    subHeading1: 'Integrated Robotics',
    fetureDescription1: 'Transform your manufacturing processes with seamlessly integrated robotics for enhanced efficiency.',

    icon2: '/assets/images/icons/automated-workflow.png',    
    subHeading2: 'automated-workflow',
    fetureDescription2: 'Streamline operations with end-to-end automation of manufacturing workflows, from production to logistics.',
  }

  factoryFeatureData2= {
    heading: 'Real-Time Data Insights',
    featureNumber: '02',
    largeImg: '/assets/images/real-time-data.png',

    icon1: '/assets/images/icons/iot.png',
    subHeading1: 'IoT Sensors and Analytics',
    fetureDescription1: 'Collect and analyze real-time data from machines and processes for actionable insights.',

    icon2: '/assets/images/icons/quality.png',    
    subHeading2: 'Quality Control Systems',
    fetureDescription2: 'Implement smart quality control systems for consistent and high-quality manufacturing.',
  }

  factoryFeatureData3= {
    heading: 'Flexible Production',
    featureNumber: '03',
    largeImg: '/assets/images/fixing-production.png',

    icon1: '/assets/images/icons/capability.png',
    subHeading1: 'Customization Capabilities',
    fetureDescription1: 'Easily switch between product configurations and adapt production lines for customization.',

    icon2: '/assets/images/icons/supply-chain.png',    
    subHeading2: 'Supply Chain Integration',
    fetureDescription2: 'Seamlessly integrate with supply chain systems for efficient demand forecasting and inventory management.',
  }

  factoryFeatureData4= {
    heading: 'User-Friendly Technology Features',
    featureNumber: '04',
    largeImg: '/assets/images/user-friendly-tech.png',

    icon1: '/assets/images/icons/5g.png',
    subHeading1: '5G Connectivity',
    fetureDescription1: 'Leverage the power of 5G for high-speed, low-latency communication across the factory floor.',

    icon2: '/assets/images/icons/artificial.png',    
    subHeading2: 'Artificial Intelligence Integration',
    fetureDescription2: 'Utilize AI for predictive analytics, machine learning, and process optimization.',
  }
}
