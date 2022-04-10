import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { BowrowRecordComponent } from "./components/bowrow-record/bowrow-record.component";

const routes: Routes = [
  {
    path: '',
    component: BowrowRecordComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BowrowRecordRoutingModule { }
