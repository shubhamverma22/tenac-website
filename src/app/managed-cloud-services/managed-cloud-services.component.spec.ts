import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedCloudServicesComponent } from './managed-cloud-services.component';

describe('ManagedCloudServicesComponent', () => {
  let component: ManagedCloudServicesComponent;
  let fixture: ComponentFixture<ManagedCloudServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagedCloudServicesComponent]
    });
    fixture = TestBed.createComponent(ManagedCloudServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
