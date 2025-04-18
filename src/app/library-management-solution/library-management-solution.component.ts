import { Component } from '@angular/core';

@Component({
  selector: 'app-library-management-solution',
  templateUrl: './library-management-solution.component.html',
  styleUrls: ['./library-management-solution.component.scss']
})
export class LibraryManagementSolutionComponent {
  factoryFeatureData= {
    heading: 'Digital Resource Management',
    featureNumber: '01',
    largeImg: '/assets/images/banner/lm-img1.png',

    icon1: '/assets/images/icons/lm-icon1.png',
    subHeading1: 'Digital Repository Integration',
    fetureDescription1: 'Seamlessly integrate with digital repositories, databases, and e-book platforms, providing students and faculty with easy access to a vast collection of digital resources.',

    icon2: '/assets/images/icons/lm-icon2.png',    
    subHeading2: 'Resource Discovery and Search',
    fetureDescription2: 'Implement advanced search and discovery tools, enabling users to easily locate and access desired resources, enhancing research and learning experiences.',
  }

  factoryFeatureData2= {
    heading: 'Automated Cataloguing and Classification',
    featureNumber: '02',
    largeImg: '/assets/images/banner/lm-img2.png',

    icon1: '/assets/images/icons/lm-icon3.png',
    subHeading1: 'Automated Metadata Extraction',
    fetureDescription1: 'Leverage intelligent algorithms to automatically extract metadata from digital resources, streamlining cataloguing and classification processes.',

    icon2: '/assets/images/icons/lm-icon4.png',    
    subHeading2: 'Customizable Classification Schemes',
    fetureDescription2: 'Implement customizable classification schemes tailored to the specific needs of your institution, ensuring accurate and efficient resource organization.',
  }

  factoryFeatureData3= {
    heading: 'Circulation and Inventory Management',
    featureNumber: '03',
    largeImg: '/assets/images/banner/lm-img3.png',

    icon1: '/assets/images/icons/lm-icon5.png',
    subHeading1: 'Self-Service Kiosks',
    fetureDescription1: 'Provide self-service kiosks for efficient borrowing, returning, and renewing of library resources, enhancing convenience and reducing staff workload.',

    icon2: '/assets/images/icons/lm-icon6.png',    
    subHeading2: 'RFID Asset Tracking',
    fetureDescription2: 'Utilize RFID technology to accurately track the location and movement of library assets, enabling efficient inventory management and minimizing resource loss.',
  }
}
