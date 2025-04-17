import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuggedPcsComponent } from './rugged-pcs.component';

describe('RuggedPcsComponent', () => {
  let component: RuggedPcsComponent;
  let fixture: ComponentFixture<RuggedPcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuggedPcsComponent]
    });
    fixture = TestBed.createComponent(RuggedPcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
