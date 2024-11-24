import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamUpsertComponent } from './exam-upsert.component';

describe('ExamUpsertComponent', () => {
  let component: ExamUpsertComponent;
  let fixture: ComponentFixture<ExamUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
