import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { MenuPageComponent } from "./components/menu-page/menu-page.component";

const routes: Routes = [
  {
    path: '',
    component: MenuPageComponent,
    // resolve: {
    //   dataResp: ''
    // }
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule { }
