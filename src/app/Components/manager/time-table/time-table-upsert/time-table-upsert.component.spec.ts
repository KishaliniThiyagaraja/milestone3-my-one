import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableUpsertComponent } from './time-table-upsert.component';

describe('TimeTableUpsertComponent', () => {
  let component: TimeTableUpsertComponent;
  let fixture: ComponentFixture<TimeTableUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeTableUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTableUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
