import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedPrintComponent } from './managed-print.component';

describe('ManagedPrintComponent', () => {
  let component: ManagedPrintComponent;
  let fixture: ComponentFixture<ManagedPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagedPrintComponent]
    });
    fixture = TestBed.createComponent(ManagedPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
