import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BowrowRecordComponent } from './components/bowrow-record/bowrow-record.component';
import { DataTableBowrowListComponent } from './components/data-table-bowrow-list/data-table-bowrow-list.component';



@NgModule({
  declarations: [
    BowrowRecordComponent,
    DataTableBowrowListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BowrowRecordModule { }
