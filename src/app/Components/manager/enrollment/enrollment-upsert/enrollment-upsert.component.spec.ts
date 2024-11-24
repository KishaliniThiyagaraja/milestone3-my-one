import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentUpsertComponent } from './enrollment-upsert.component';

describe('EnrollmentUpsertComponent', () => {
  let component: EnrollmentUpsertComponent;
  let fixture: ComponentFixture<EnrollmentUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
