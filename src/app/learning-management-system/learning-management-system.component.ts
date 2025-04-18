import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-management-system',
  templateUrl: './learning-management-system.component.html',
  styleUrls: ['./learning-management-system.component.scss']
})
export class LearningManagementSystemComponent {
  factoryFeatureData= {
    heading: 'Comprehensive Learning Solutions',
    featureNumber: '01',
    largeImg: '/assets/images/banner/lms-img1.png',

    icon1: '/assets/images/icons/lms-icon1.png',
    subHeading1: 'Secure and Scalable Infrastructure',
    fetureDescription1: 'Benefit from a secure and scalable infrastructure designed to accommodate the evolving needs of educational institutions, ensuring data privacy and system reliability.',

    icon2: '/assets/images/icons/lms-icon2.png',    
    subHeading2: 'Integrated Hardware and Software',
    fetureDescription2: 'Our system harmoniously combines top-tier IT hardware with advanced eLearning software, ensuring seamless compatibility and optimal performance.',
  }

  factoryFeatureData2= {
    heading: 'Advanced Course Management',
    featureNumber: '02',
    largeImg: '/assets/images/banner/lms-img2.png',

    icon1: '/assets/images/icons/lms-icon3.png',
    subHeading1: 'Interactive Learning Tools',
    fetureDescription1: 'Engage students with interactive tools such as virtual whiteboards, multimedia presentations, and collaborative workspaces, fostering active participation and knowledge retention.',

    icon2: '/assets/images/icons/lms-icon4.png',    
    subHeading2: 'Customizable Curriculum Management',
    fetureDescription2: 'Easily create, manage, and adapt course materials to suit diverse learning styles and objectives, empowering educators to deliver personalized learning experiences.',
  }

  factoryFeatureData3= {
    heading: 'Collaborative Learning Environments',
    featureNumber: '03',
    largeImg: '/assets/images/banner/lms-img3.png',

    icon1: '/assets/images/icons/lms-icon5.png',
    subHeading1: 'Integrated Learning Management System',
    fetureDescription1: 'Streamline administrative tasks and enhance communication between educators and students with our integrated Learning Management System (LMS).',

    icon2: '/assets/images/icons/lms-icon6.png',    
    subHeading2: 'Real-Time Analytics',
    fetureDescription2: 'Gain valuable insights into student progress and performance with comprehensive analytics dashboards, enabling informed decision-making and targeted interventions.',
  }
}
