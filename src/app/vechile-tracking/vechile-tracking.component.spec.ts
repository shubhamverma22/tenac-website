import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileTrackingComponent } from './vechile-tracking.component';

describe('VechileTrackingComponent', () => {
  let component: VechileTrackingComponent;
  let fixture: ComponentFixture<VechileTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VechileTrackingComponent]
    });
    fixture = TestBed.createComponent(VechileTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
