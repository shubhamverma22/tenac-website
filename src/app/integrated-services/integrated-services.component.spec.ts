import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedServicesComponent } from './integrated-services.component';

describe('IntegratedServicesComponent', () => {
  let component: IntegratedServicesComponent;
  let fixture: ComponentFixture<IntegratedServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegratedServicesComponent]
    });
    fixture = TestBed.createComponent(IntegratedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
