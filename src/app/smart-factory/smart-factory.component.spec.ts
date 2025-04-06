import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFactoryComponent } from './smart-factory.component';

describe('SmartFactoryComponent', () => {
  let component: SmartFactoryComponent;
  let fixture: ComponentFixture<SmartFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartFactoryComponent]
    });
    fixture = TestBed.createComponent(SmartFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
