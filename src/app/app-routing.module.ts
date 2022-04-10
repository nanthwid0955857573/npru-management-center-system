import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuPageModule } from './modules/menu-page/menu-page.module'
import {BowrowRecordModule} from './modules/bowrow-record/bowrow-record.module';
const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menuPage',  loadChildren: () => MenuPageModule},
  { path: 'readerRecord', loadChildren: () => BowrowRecordModule}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
