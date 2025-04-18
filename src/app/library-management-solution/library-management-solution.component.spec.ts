import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryManagementSolutionComponent } from './library-management-solution.component';

describe('LibraryManagementSolutionComponent', () => {
  let component: LibraryManagementSolutionComponent;
  let fixture: ComponentFixture<LibraryManagementSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryManagementSolutionComponent]
    });
    fixture = TestBed.createComponent(LibraryManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
