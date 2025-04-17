import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuleMonitorDetailComponent } from './fule-monitor-detail.component';

describe('FuleMonitorDetailComponent', () => {
  let component: FuleMonitorDetailComponent;
  let fixture: ComponentFixture<FuleMonitorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuleMonitorDetailComponent]
    });
    fixture = TestBed.createComponent(FuleMonitorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
