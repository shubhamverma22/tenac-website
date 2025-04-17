import { Component } from '@angular/core';

@Component({
  selector: 'app-assets-tracking-solution',
  templateUrl: './assets-tracking-solution.component.html',
  styleUrls: ['./assets-tracking-solution.component.scss']
})
export class AssetsTrackingSolutionComponent {
  factoryFeatureData= {
    heading: 'Location Intelligence',
    featureNumber: '01',
    largeImg: '/assets/images/banner/ats-img1.png',

    icon1: '/assets/images/icons/ats-icon1.png',
    subHeading1: 'Live Location Updates',
    fetureDescription1: 'Monitor the exact location of each asset in real-time for complete situational awareness.',

    icon2: '/assets/images/icons/ats-icon2.png',    
    subHeading2: 'Geofencing Technology',
    fetureDescription2: 'Set virtual boundaries and receive instant alerts when assets enter or exit predefined areas, enabling tighter control over your operations.',
  }

  factoryFeatureData2= {
    heading: 'Comprehensive Asset Information',
    featureNumber: '02',
    largeImg: '/assets/images/banner/ats-img2.png',

    icon1: '/assets/images/icons/ats-icon3.png',
    subHeading1: 'Health and Status Monitoring',
    fetureDescription1: 'Track the condition and performance of your assets in real-time to proactively address maintenance needs.',

    icon2: '/assets/images/icons/ats-icon4.png',    
    subHeading2: 'Historical Data Analysis',
    fetureDescription2: 'Analyze usage patterns to optimize asset deployment and maximize operational efficiency across your mining operations.',
  }

  factoryFeatureData3= {
    heading: 'Multi-Platform Accessibility',
    featureNumber: '03',
    largeImg: '/assets/images/banner/ats-img3.png',

    icon1: '/assets/images/icons/ats-icon5.png',
    subHeading1: 'Mobile App',
    fetureDescription1: 'Stay connected on the go with our intuitive mobile application, putting critical data at your fingertips.',

    icon2: '/assets/images/icons/ats-icon6.png',    
    subHeading2: 'Web Dashboard',
    fetureDescription2: 'Monitor and manage your assets through a centralized and highly visual web interface.',
  }

  factoryFeatureData4= {
    heading: 'Security and Anti-Theft Measures',
    featureNumber: '03',
    largeImg: '/assets/images/banner/ats-img4.png',

    icon1: '/assets/images/icons/ats-icon7.png',
    subHeading1: 'Anti-Theft Alerts',
    fetureDescription1: 'Receive instant alerts in case of unauthorized asset movement, enabling swift response.',

    icon2: '/assets/images/icons/ats-icon8.png',    
    subHeading2: 'Remote Lock and Wipe',
    fetureDescription2: 'Secure assets remotely by locking or wiping data in case of theft or unauthorized access, safeguarding your critical equipment.',
  }

  factoryFeatureData5= {
    heading: 'Environmental Impact Monitoring',
    featureNumber: '03',
    largeImg: '/assets/images/banner/ats-img5.png',

    icon1: '/assets/images/icons/ats-icon7.png',
    subHeading1: 'Energy Efficiency Analytics',
    fetureDescription1: 'Monitor the energy consumption of your assets, empowering you to make informed decisions for sustainable resource management.',

    icon2: '/assets/images/icons/ats-icon8.png',    
    subHeading2: 'Environmental Impact Reports',
    fetureDescription2: 'Understand the ecological footprint of your mining assets and work towards ambitious environmental goals.',
  }
}
