import { Component } from '@angular/core';

@Component({
  selector: 'app-pa-system',
  templateUrl: './pa-system.component.html',
  styleUrls: ['./pa-system.component.scss']
})
export class PaSystemComponent {
  factoryFeatureData= {
    heading: 'Integrated IP-Based Solutions',
    featureNumber: '01',
    largeImg: '/assets/images/banner/pas-img1.png',

    icon1: '/assets/images/icons/pas-icon1.png',
    subHeading1: 'Network-Enabled Speakers',
    fetureDescription1: 'Leverage IP-based speakers that seamlessly integrate with your existing network infrastructure, enabling centralized control and remote management capabilities.',

    icon2: '/assets/images/icons/pas-icon2.png',    
    subHeading2: 'Voice over IP (VoIP) Integration',
    fetureDescription2: 'Integrate your PA system with VoIP technology, allowing for paging, intercom functionality, and emergency notifications through the same network.',
  }

  factoryFeatureData2= {
    heading: 'Customizable Zoning and Scheduling',
    featureNumber: '02',
    largeImg: '/assets/images/banner/pas-img2.png',

    icon1: '/assets/images/icons/pas-icon3.png',
    subHeading1: 'Customizable Zoning and Scheduling',
    fetureDescription1: 'Easily configure audio zones to target specific areas or classrooms, ensuring targeted messaging and minimizing disruptions.',

    icon2: '/assets/images/icons/pas-icon4.png',    
    subHeading2: 'Automated Scheduling',
    fetureDescription2: 'Implement automated scheduling for bells, announcements, and other audio events, streamlining daily operations and improving efficiency.',
  }

  factoryFeatureData3= {
    heading: 'Emergency Response and Notification',
    featureNumber: '03',
    largeImg: '/assets/images/banner/pas-img3.png',

    icon1: '/assets/images/icons/pas-icon5.png',
    subHeading1: 'Prioritized Emergency Broadcasts',
    fetureDescription1: 'Enable prioritized emergency broadcasts that override scheduled audio events, ensuring critical information reaches everyone promptly during emergencies.',

    icon2: '/assets/images/icons/pas-icon6.png',    
    subHeading2: 'Integration with Mass Notification Systems',
    fetureDescription2: 'Seamlessly integrate your PA system with mass notification systems, providing a unified platform for emergency alerts and instructions.',
  }
}
