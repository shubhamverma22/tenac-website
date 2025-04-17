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
    subHeading3: String,
    featureNumber1: Number,
    featureNumber2: Number,
    featureNumber3: Number,
    fetureDescription1: String,
    fetureDescription2: String,
    fetureDescription3: String,
    featureIcon: {
      icon1: String,
      icon2: String,
      icon3: String,
      icon4: String,
      icon5: String,
      icon6: String,
      icon7: String,
      icon8: String,
      icon9: String,
    }
  }

}
