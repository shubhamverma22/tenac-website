import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterSupportComponent } from './data-center-support.component';

describe('DataCenterSupportComponent', () => {
  let component: DataCenterSupportComponent;
  let fixture: ComponentFixture<DataCenterSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCenterSupportComponent]
    });
    fixture = TestBed.createComponent(DataCenterSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
