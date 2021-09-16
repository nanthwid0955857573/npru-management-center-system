import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginSystemService } from 'src/app/services/login/login-system.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private loginSystemService:LoginSystemService
  ) { 
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  login(){
     this.loginSystemService.login(this.loginForm.get('username').value,this.loginForm.get('password').value).subscribe(
       (result:any) =>{
        console.log('result is ',result);
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

