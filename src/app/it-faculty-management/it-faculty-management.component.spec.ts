import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItFacultyManagementComponent } from './it-faculty-management.component';

describe('ItFacultyManagementComponent', () => {
  let component: ItFacultyManagementComponent;
  let fixture: ComponentFixture<ItFacultyManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItFacultyManagementComponent]
    });
    fixture = TestBed.createComponent(ItFacultyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
