import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorIntegrationComponent } from './sensor-integration.component';

describe('SensorIntegrationComponent', () => {
  let component: SensorIntegrationComponent;
  let fixture: ComponentFixture<SensorIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorIntegrationComponent]
    });
    fixture = TestBed.createComponent(SensorIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
