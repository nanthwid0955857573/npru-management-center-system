import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BowrowRecordComponent } from './components/bowrow-record/bowrow-record.component';
import { DataTableBowrowListComponent } from './components/data-table-bowrow-list/data-table-bowrow-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MaterialModule } from './material.modules';
import {BowrowRecordRoutingModule} from './bowrow-record.routing.module'


@NgModule({
  declarations: [
    BowrowRecordComponent,
    DataTableBowrowListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MdbCheckboxModule,
    MaterialModule
  ],
  exports: [BowrowRecordRoutingModule]
})
export class BowrowRecordModule { }
