import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningManagementSystemComponent } from './learning-management-system.component';

describe('LearningManagementSystemComponent', () => {
  let component: LearningManagementSystemComponent;
  let fixture: ComponentFixture<LearningManagementSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningManagementSystemComponent]
    });
    fixture = TestBed.createComponent(LearningManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
