import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaSystemComponent } from './pa-system.component';

describe('PaSystemComponent', () => {
  let component: PaSystemComponent;
  let fixture: ComponentFixture<PaSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaSystemComponent]
    });
    fixture = TestBed.createComponent(PaSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
