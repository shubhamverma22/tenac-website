import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClassroomComponent } from './digital-classroom.component';

describe('DigitalClassroomComponent', () => {
  let component: DigitalClassroomComponent;
  let fixture: ComponentFixture<DigitalClassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalClassroomComponent]
    });
    fixture = TestBed.createComponent(DigitalClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
