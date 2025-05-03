import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryWeServeComponent } from './industry-we-serve.component';

describe('IndustryWeServeComponent', () => {
  let component: IndustryWeServeComponent;
  let fixture: ComponentFixture<IndustryWeServeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryWeServeComponent]
    });
    fixture = TestBed.createComponent(IndustryWeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
