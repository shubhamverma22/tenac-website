import { Component } from '@angular/core';

@Component({
  selector: 'app-rugged-pcs',
  templateUrl: './rugged-pcs.component.html',
  styleUrls: ['./rugged-pcs.component.scss']
})
export class RuggedPcsComponent {
  factoryFeatureData= {
    heading: 'Advanced Technology for Extreme Conditions',
    featureNumber: '01',
    largeImg: '/assets/images/banner/rp-img1.png',

    icon1: '/assets/images/icons/rp-icon1.png',
    subHeading1: 'Industrial-Grade Components',
    fetureDescription1: 'Our Rugged PCs are equipped with components that withstand extreme temperatures, humidity, and vibrations.',

    icon2: '/assets/images/icons/rp-icon2.png',    
    subHeading2: 'Water and Dust Resistance',
    fetureDescription2: 'Ensure uninterrupted operation with PCs that are resistant to water and dust ingress.',
  }

  factoryFeatureData2= {
    heading: 'Clarity in Any Condition',
    featureNumber: '02',
    largeImg: '/assets/images/banner/rp-img2.png',

    icon1: '/assets/images/icons/rp-icon3.png',
    subHeading1: 'Sunlight Readable Technology',
    fetureDescription1: 'Maintain visibility in bright sunlight for seamless outdoor operations.',

    icon2: '/assets/images/icons/rp-icon4.png',    
    subHeading2: 'Impact-Resistant Screens',
    fetureDescription2: 'Experience durability with displays designed to withstand impact and abrasion.',
  }

  factoryFeatureData3= {
    heading: 'Precision in the Toughest Environments',
    featureNumber: '03',
    largeImg: '/assets/images/banner/rp-img3.png',

    icon1: '/assets/images/icons/rp-icon5.png',
    subHeading1: 'Environmental Sensors',
    fetureDescription1: 'Monitor temperature, humidity, and other environmental factors in real-time.',

    icon2: '/assets/images/icons/rp-icon6.png',    
    subHeading2: 'Vibration and Shock Sensors',
    fetureDescription2: 'Ensure equipment integrity by detecting and responding to excessive vibrations and shocks.',
  }

  factoryFeatureData4= {
    heading: 'Environmental Sustainability',
    featureNumber: '03',
    largeImg: '/assets/images/banner/rp-img4.png',

    icon1: '/assets/images/icons/rp-icon7.png',
    subHeading1: 'Long Lifecycle Design',
    fetureDescription1: 'Minimize electronic waste with rugged devices built for an extended lifecycle.',

    icon2: '/assets/images/icons/rp-icon8.png',    
    subHeading2: 'Energy-Efficient Components',
    fetureDescription2: 'Utilize energy-efficient technology for a greener computing environment.',
  }
}
