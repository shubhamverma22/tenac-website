import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManagementSolutionComponent } from './fleet-management-solution.component';

describe('FleetManagementSolutionComponent', () => {
  let component: FleetManagementSolutionComponent;
  let fixture: ComponentFixture<FleetManagementSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetManagementSolutionComponent]
    });
    fixture = TestBed.createComponent(FleetManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
