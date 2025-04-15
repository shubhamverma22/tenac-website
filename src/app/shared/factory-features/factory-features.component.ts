import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-factory-features',
  templateUrl: './factory-features.component.html',
  styleUrls: ['./factory-features.component.scss']
})
export class FactoryFeaturesComponent {
  @Input() factoryFeatureData: any = {
    heading: String,
    largeImg: String,
    subHeading1: String,
    subHeading2: String,
    featureNumber1: Number,
    featureNumber2: Number,
    fetureDescription1: String,
    fetureDescription2: String,
    featureIcon: {
      icon1: String,
      icon2: String,
      icon3: String,
      icon4: String
    }
  }

}
