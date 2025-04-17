import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveMaintainanceSolutionComponent } from './predictive-maintainance-solution.component';

describe('PredictiveMaintainanceSolutionComponent', () => {
  let component: PredictiveMaintainanceSolutionComponent;
  let fixture: ComponentFixture<PredictiveMaintainanceSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictiveMaintainanceSolutionComponent]
    });
    fixture = TestBed.createComponent(PredictiveMaintainanceSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
