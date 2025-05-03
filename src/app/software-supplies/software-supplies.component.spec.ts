import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSuppliesComponent } from './software-supplies.component';

describe('SoftwareSuppliesComponent', () => {
  let component: SoftwareSuppliesComponent;
  let fixture: ComponentFixture<SoftwareSuppliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareSuppliesComponent]
    });
    fixture = TestBed.createComponent(SoftwareSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
