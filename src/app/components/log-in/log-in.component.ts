import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginSystemService } from '../../services/login/login-system.service';
import { SetUserDetail } from '../../stores/user-detail/user-detail.actions';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private store: Store,
    private loginSystemService:LoginSystemService
  ) { 
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onPaste(){
    console.log('heloo');
  }
  login(){
     this.loginSystemService.login(this.loginForm.get('username').value,this.loginForm.get('password').value).subscribe(
       (result:any) =>{
        console.log('result is ',result.data);
         const userDetails = {
           email: result.data.email,
           username: result.data.username,
           roles: result.data.roles,
           id: result.data.id
          }
          console.log('userDetails is ',userDetails);
          const userDetailJson = JSON.stringify(userDetails);
          sessionStorage.setItem('userDetail', btoa(userDetailJson));
          this.store.dispatch(new SetUserDetail(userDetails));
        // this.loginForm.get('username').setValue('');
        // this.loginForm.get('password').setValue('');
     }, (error: any) => {
      // this.disableLogin = false;
      console.error(error);
      // this.store.dispatch(new CloseLoadingSpinner());
      // this.utils.showMessageBox(error);
    }
  );
     
  }
  // onSubmit() {
  //     this.newPrepaidLoginService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
  //       (result: any) => {
         
  //       },
  //       (error: any) => {    
  //         console.error(error);
  //       }
  //     );
  //   }
  }

