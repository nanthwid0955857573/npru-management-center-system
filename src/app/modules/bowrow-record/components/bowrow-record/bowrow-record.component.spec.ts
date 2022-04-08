import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowrowRecordComponent } from './bowrow-record.component';

describe('BowrowRecordComponent', () => {
  let component: BowrowRecordComponent;
  let fixture: ComponentFixture<BowrowRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowrowRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowrowRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
