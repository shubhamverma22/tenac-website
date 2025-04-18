import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusItSolutionComponent } from './campus-it-solution.component';

describe('CampusItSolutionComponent', () => {
  let component: CampusItSolutionComponent;
  let fixture: ComponentFixture<CampusItSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusItSolutionComponent]
    });
    fixture = TestBed.createComponent(CampusItSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
