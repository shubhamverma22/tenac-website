import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRestorationComponent } from './it-restoration.component';

describe('ItRestorationComponent', () => {
  let component: ItRestorationComponent;
  let fixture: ComponentFixture<ItRestorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItRestorationComponent]
    });
    fixture = TestBed.createComponent(ItRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
