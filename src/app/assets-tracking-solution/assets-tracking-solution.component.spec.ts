import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsTrackingSolutionComponent } from './assets-tracking-solution.component';

describe('AssetsTrackingSolutionComponent', () => {
  let component: AssetsTrackingSolutionComponent;
  let fixture: ComponentFixture<AssetsTrackingSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsTrackingSolutionComponent]
    });
    fixture = TestBed.createComponent(AssetsTrackingSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
