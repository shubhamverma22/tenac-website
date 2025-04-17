import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSaftyFatigueComponent } from './personal-safty-fatigue.component';

describe('PersonalSaftyFatigueComponent', () => {
  let component: PersonalSaftyFatigueComponent;
  let fixture: ComponentFixture<PersonalSaftyFatigueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalSaftyFatigueComponent]
    });
    fixture = TestBed.createComponent(PersonalSaftyFatigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
