import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-safty-fatigue',
  templateUrl: './personal-safty-fatigue.component.html',
  styleUrls: ['./personal-safty-fatigue.component.scss']
})
export class PersonalSaftyFatigueComponent {
  factoryFeatureData= {
    heading: 'Wearable Headbands for Fatigue Monitoring',
    featureNumber: '01',
    largeImg: '/assets/images/banner/ps-img1.png',

    icon1: '/assets/images/icons/ps-icon1.png',
    subHeading1: 'Real-Time Fatigue Alerts',
    fetureDescription1: 'Receive instant alerts when signs of fatigue are detected, enabling timely intervention to prevent accidents.',

    icon2: '/assets/images/icons/ps-icon2.png',    
    subHeading2: 'Vital Signs Monitoring',
    fetureDescription2: 'Track heart rate and other vital signs for comprehensive fatigue analysis, ensuring your workforce remains alert and safe.',
  }

  factoryFeatureData2= {
    heading: 'Smart Helmets for Enhanced Safety',
    featureNumber: '02',
    largeImg: '/assets/images/banner/ps-img2.png',

    icon1: '/assets/images/icons/ps-icon3.png',
    subHeading1: 'Real-time Displays',
    fetureDescription1: 'Provide critical data and alerts directly within the line of sight of your workers, keeping them informed and responsive.',

    icon2: '/assets/images/icons/ps-icon4.png',    
    subHeading2: 'Emergency Response Integration',
    fetureDescription2: 'Enable your personnel to access emergency assistance with a simple gesture or voice command, ensuring rapid response in times of crisis.',
  }

  factoryFeatureData3= {
    heading: 'Comprehensive Personnel Tracking',
    featureNumber: '03',
    largeImg: '/assets/images/banner/ps-img3.png',

    icon1: '/assets/images/icons/ps-icon5.png',
    subHeading1: 'Live Location Updates',
    fetureDescription1: 'Track the real-time location of your personnel, even in challenging mining environments, for enhanced visibility and control.',

    icon2: '/assets/images/icons/ps-icon6.png',    
    subHeading2: 'Geofencing Technology',
    fetureDescription2: 'Set virtual boundaries for restricted areas and receive immediate alerts when personnel enter or exit these zones, strengthening your safety protocols.',
  }

  factoryFeatureData4= {
    heading: 'Advanced Wearable Technology',
    featureNumber: '03',
    largeImg: '/assets/images/banner/ps-img4.png',

    icon1: '/assets/images/icons/ps-icon7.png',
    subHeading1: 'Customizable Alerts',
    fetureDescription1: 'Tailor the alerts and notifications to suit the unique needs and preferences of your mining personnel, improving user adoption and engagement.',

    icon2: '/assets/images/icons/ps-icon8.png',    
    subHeading2: 'Integration Capabilities',
    fetureDescription2: 'Seamlessly integrate our wearable solutions with your existing fleet management and safety systems for enhanced functionality and a holistic approach to personnel protection.',
  }
}
