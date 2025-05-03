import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareServicesComponent } from './hardware-services.component';

describe('HardwareServicesComponent', () => {
  let component: HardwareServicesComponent;
  let fixture: ComponentFixture<HardwareServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareServicesComponent]
    });
    fixture = TestBed.createComponent(HardwareServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
