import { Component } from '@angular/core';

@Component({
  selector: 'app-campus-it-solution',
  templateUrl: './campus-it-solution.component.html',
  styleUrls: ['./campus-it-solution.component.scss']
})
export class CampusItSolutionComponent {
  factoryFeatureData= {
    heading: 'Integrated Campus Solutions',
    featureNumber: '01',
    largeImg: '/assets/images/banner/cis-img1.png',

    icon1: '/assets/images/icons/cis-icon1.png',
    subHeading1: 'Classroom Technology Integration',
    fetureDescription1: 'Equip classrooms with state-of-the-art technology, including interactive displays, projectors, and audio systems, to enhance teaching and learning experiences.',

    icon2: '/assets/images/icons/cis-icon2.png',    
    subHeading2: 'Unified Communication Solutions',
    fetureDescription2: 'Facilitate seamless communication and collaboration among faculty, staff, and students with unified communication solutions, including VoIP systems and messaging platforms.',
  }

  factoryFeatureData2= {
    heading: 'Campus Facilities Optimization',
    featureNumber: '02',
    largeImg: '/assets/images/banner/cis-img2.png',

    icon1: '/assets/images/icons/cis-icon3.png',
    subHeading1: 'IT Asset Management',
    fetureDescription1: 'Streamline IT asset procurement, tracking, and lifecycle management processes to optimize resource utilization and minimize downtime.',

    icon2: '/assets/images/icons/cis-icon4.png',    
    subHeading2: 'Network Infrastructure',
    fetureDescription2: 'Design and deploy robust network infrastructure solutions to support the connectivity needs of campus buildings, ensuring reliable access to digital resources and services.',
  }

  factoryFeatureData3= {
    heading: 'Student Engagement and Communication',
    featureNumber: '03',
    largeImg: '/assets/images/banner/cis-img3.png',

    icon1: '/assets/images/icons/cis-icon5.png',
    subHeading1: 'Security Systems',
    fetureDescription1: 'Implement advanced security systems, such as access control and surveillance cameras, to safeguard campus premises and protect students, staff, and assets.',

    icon2: '/assets/images/icons/cis-icon6.png',    
    subHeading2: 'Smart Classroom Solutions',
    fetureDescription2: 'Implement intelligent classroom solutions with features like automated attendance tracking, smart boards, and IoT-enabled devices to enhance teaching effectiveness and student engagement.',
  }
}
