import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksUpsertComponent } from './marks-upsert.component';

describe('MarksUpsertComponent', () => {
  let component: MarksUpsertComponent;
  let fixture: ComponentFixture<MarksUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarksUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
