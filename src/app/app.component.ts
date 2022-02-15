import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as storeState from './stores';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'npru-management-center-system';
  opened= false;
  userDetail:any;
  displayRegisterAndLogin = true;
  displayLogout = false;
  constructor(
    private store: Store,
    private router: Router
  ){
    console.log('userDetail');
    this.store.select(storeState.userDetail).subscribe((userDetail: any) => {
      const userInSession = sessionStorage.getItem('userDetail');
      console.log('userDetail',userDetail);
      this.userDetail = userDetail;
       if(this.userDetail !== null){
        this.displayRegisterAndLogin = false;
        this.displayLogout = true;
        this.router.navigateByUrl('/menuPage');
       }
    })
  }
}
