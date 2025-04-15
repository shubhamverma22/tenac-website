import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryFeaturesComponent } from './factory-features.component';

describe('FactoryFeaturesComponent', () => {
  let component: FactoryFeaturesComponent;
  let fixture: ComponentFixture<FactoryFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactoryFeaturesComponent]
    });
    fixture = TestBed.createComponent(FactoryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
