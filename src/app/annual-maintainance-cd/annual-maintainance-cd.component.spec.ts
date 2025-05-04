import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualMaintainanceCdComponent } from './annual-maintainance-cd.component';

describe('AnnualMaintainanceCdComponent', () => {
  let component: AnnualMaintainanceCdComponent;
  let fixture: ComponentFixture<AnnualMaintainanceCdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualMaintainanceCdComponent]
    });
    fixture = TestBed.createComponent(AnnualMaintainanceCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
