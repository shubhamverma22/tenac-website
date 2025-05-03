import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareSuppliesComponent } from './hardware-supplies.component';

describe('HardwareSuppliesComponent', () => {
  let component: HardwareSuppliesComponent;
  let fixture: ComponentFixture<HardwareSuppliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareSuppliesComponent]
    });
    fixture = TestBed.createComponent(HardwareSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
