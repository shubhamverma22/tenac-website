import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuleMonitoringSystemComponent } from './fule-monitoring-system.component';

describe('FuleMonitoringSystemComponent', () => {
  let component: FuleMonitoringSystemComponent;
  let fixture: ComponentFixture<FuleMonitoringSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuleMonitoringSystemComponent]
    });
    fixture = TestBed.createComponent(FuleMonitoringSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
