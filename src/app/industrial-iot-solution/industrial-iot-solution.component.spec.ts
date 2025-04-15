import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialIotSolutionComponent } from './industrial-iot-solution.component';

describe('IndustrialIotSolutionComponent', () => {
  let component: IndustrialIotSolutionComponent;
  let fixture: ComponentFixture<IndustrialIotSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialIotSolutionComponent]
    });
    fixture = TestBed.createComponent(IndustrialIotSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
