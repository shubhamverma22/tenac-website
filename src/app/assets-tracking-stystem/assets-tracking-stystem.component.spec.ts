import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsTrackingStystemComponent } from './assets-tracking-stystem.component';

describe('AssetsTrackingStystemComponent', () => {
  let component: AssetsTrackingStystemComponent;
  let fixture: ComponentFixture<AssetsTrackingStystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsTrackingStystemComponent]
    });
    fixture = TestBed.createComponent(AssetsTrackingStystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
