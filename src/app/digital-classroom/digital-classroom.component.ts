import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-classroom',
  templateUrl: './digital-classroom.component.html',
  styleUrls: ['./digital-classroom.component.scss']
})
export class DigitalClassroomComponent {
  factoryFeatureData= {
    heading: 'Interactive Smart Displays',
    featureNumber: '01',
    largeImg: '/assets/images/banner/ds-img1.png',

    icon1: '/assets/images/icons/ds-icon1.png',
    subHeading1: 'Ultra-HD Displays',
    fetureDescription1: 'Immerse students in interactive learning experiences with high-resolution displays that support touch and stylus input, enabling dynamic content creation and collaboration.',

    icon2: '/assets/images/icons/ds-icon2.png',    
    subHeading2: 'Collaborative Workspaces',
    fetureDescription2: 'Foster teamwork and creativity with collaborative workspaces that enable real-time document sharing, annotation, and brainstorming sessions.',
  }

  factoryFeatureData2= {
    heading: 'Collaborative Learning Tools',
    featureNumber: '02',
    largeImg: '/assets/images/banner/ds-img2.png',

    icon1: '/assets/images/icons/ds-icon3.png',
    subHeading1: 'Virtual Reality Integration',
    fetureDescription1: 'Guide students to immersive learning environments with virtual reality headsets and software, enhancing comprehension and retention of complex concepts.',

    icon2: '/assets/images/icons/ds-icon4.png',    
    subHeading2: 'Secure Infrastructure',
    fetureDescription2: 'Prioritize data security and privacy with robust infrastructure solutions, including encrypted communication channels and access controls, safeguarding sensitive information and ensuring compliance with regulatory standards.',
  }

  factoryFeatureData3= {
    heading: 'Dynamic Classroom Management',
    featureNumber: '03',
    largeImg: '/assets/images/banner/ds-img3.png',

    icon1: '/assets/images/icons/ds-icon5.png',
    subHeading1: 'AI-Powered Analytics',
    fetureDescription1: 'Harness the power of artificial intelligence to analyze student performance data and provide personalized insights and recommendations for educators, facilitating targeted interventions and support.',

    icon2: '/assets/images/icons/ds-icon6.png',    
    subHeading2: 'Remote Learning Support',
    fetureDescription2: 'Facilitate seamless remote learning experiences with cloud-based platforms and video conferencing tools, ensuring continuity of education regardless of physical location.',
  }
}
