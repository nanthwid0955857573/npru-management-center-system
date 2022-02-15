import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterSystemService } from '../../services/register/register-system.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  Roles:any = [
   "admin",
   "author",
   "reader",
  ]
 
  
  
   ;
  constructor(
    private fb: FormBuilder,
    public registerSystemService: RegisterSystemService
  ) { 
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roles: ['', [Validators.required]],
    });
      


    //  for (let i = 0; i < this.Roles; i++){
    //       this.res.push();
    //  }
     


  }
  
  ngOnInit() {
  }
  register(){
    this.registerSystemService.register(this.registerForm.value).subscribe(
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
}