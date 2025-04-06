import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBanner2Component } from './hero-banner2.component';

describe('HeroBanner2Component', () => {
  let component: HeroBanner2Component;
  let fixture: ComponentFixture<HeroBanner2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBanner2Component]
    });
    fixture = TestBed.createComponent(HeroBanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
