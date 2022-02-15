import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import {MenuPageRoutingModule} from './menu-page.routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.modules';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MdbCheckboxModule,
    MaterialModule
  ],
  exports: [MenuPageRoutingModule]
})
export class MenuPageModule { }
