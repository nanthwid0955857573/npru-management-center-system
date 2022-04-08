import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableBowrowListComponent } from './data-table-bowrow-list.component';

describe('DataTableBowrowListComponent', () => {
  let component: DataTableBowrowListComponent;
  let fixture: ComponentFixture<DataTableBowrowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableBowrowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableBowrowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
