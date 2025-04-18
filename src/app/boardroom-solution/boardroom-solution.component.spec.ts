import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardroomSolutionComponent } from './boardroom-solution.component';

describe('BoardroomSolutionComponent', () => {
  let component: BoardroomSolutionComponent;
  let fixture: ComponentFixture<BoardroomSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardroomSolutionComponent]
    });
    fixture = TestBed.createComponent(BoardroomSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
