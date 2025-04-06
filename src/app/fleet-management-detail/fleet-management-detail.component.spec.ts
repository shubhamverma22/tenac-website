import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManagementDetailComponent } from './fleet-management-detail.component';

describe('FleetManagementDetailComponent', () => {
  let component: FleetManagementDetailComponent;
  let fixture: ComponentFixture<FleetManagementDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetManagementDetailComponent]
    });
    fixture = TestBed.createComponent(FleetManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
