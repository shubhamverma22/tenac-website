import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMigrationServiceComponent } from './data-migration-service.component';

describe('DataMigrationServiceComponent', () => {
  let component: DataMigrationServiceComponent;
  let fixture: ComponentFixture<DataMigrationServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataMigrationServiceComponent]
    });
    fixture = TestBed.createComponent(DataMigrationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
