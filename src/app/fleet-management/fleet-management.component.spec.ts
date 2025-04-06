import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManagementComponent } from './fleet-management.component';

describe('FleetManagementComponent', () => {
  let component: FleetManagementComponent;
  let fixture: ComponentFixture<FleetManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetManagementComponent]
    });
    fixture = TestBed.createComponent(FleetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
