import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesUpsertComponent } from './courses-upsert.component';

describe('CoursesUpsertComponent', () => {
  let component: CoursesUpsertComponent;
  let fixture: ComponentFixture<CoursesUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
