import { Component } from '@angular/core';

@Component({
  selector: 'app-industrial-iot-solution',
  templateUrl: './industrial-iot-solution.component.html',
  styleUrls: ['./industrial-iot-solution.component.scss']
})
export class IndustrialIotSolutionComponent {
  factoryFeatureData= {
    heading: 'Seamless Connectivity',
    featureNumber: '01',
    largeImg: '/assets/images/seamless-connectivity.png',

    icon1: '/assets/images/icons/iot.png',
    subHeading1: 'IoT Sensors',
    fetureDescription1: 'Deploy smart sensors to gather real-time data, providing insights into every step of your manufacturing process.',

    icon2: '/assets/images/icons/ecosystem.png',    
    subHeading2: 'Connected Ecosystem',
    fetureDescription2: 'Create a connected ecosystem that enhances collaboration and efficiency across your entire manufacturing floor.',
  }

  factoryFeatureData2= {
    heading: 'Operational Optimization',
    featureNumber: '02',
    largeImg: '/assets/images/operational-optimize.png',

    icon1: '/assets/images/icons/enery-efficiency.png',
    subHeading1: 'Process Automation',
    fetureDescription1: 'Streamline and automate processes, increasing operational efficiency and reducing manual intervention.',

    icon2: '/assets/images/icons/process-automation.png',    
    subHeading2: 'Energy Efficiency',
    fetureDescription2: 'Monitor and optimize energy consumption for a sustainable and cost-effective manufacturing environment.',
  }

  factoryFeatureData3= {
    heading: 'Smart Manufacturing',
    featureNumber: '03',
    largeImg: '/assets/images/smart-manufacturing.png',

    icon1: '/assets/images/icons/customize-dashboard.png',
    subHeading1: 'Customizable Dashboards',
    fetureDescription1: 'Access real-time insights through customizable dashboards tailored to your specific manufacturing KPIs.',

    icon2: '/assets/images/icons/remote-monitor.png',    
    subHeading2: 'Remote Monitoring',
    fetureDescription2: 'Monitor manufacturing processes remotely, empowering your team with flexibility and agility.',
  }

  factoryFeatureData4= {
    heading: 'User-Friendly Interface and Accessibility',
    featureNumber: '04',
    largeImg: '/assets/images/user-friendly-interface.png',

    icon1: '/assets/images/icons/edge-computing.png',
    subHeading1: 'Edge Computing Capabilities',
    fetureDescription1: 'Leverage edge computing for real-time data processing at the source, reducing latency and enhancing efficiency.',

    icon2: '/assets/images/icons/blockchaining.png',    
    subHeading2: 'Blockchain Integration',
    fetureDescription2: 'Enhance data security and traceability with blockchain integration, ensuring the integrity of your manufacturing data.',
  }
}
