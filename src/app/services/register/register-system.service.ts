import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterSystemService {

  constructor(
    private httpClient: HttpClient,
  ) {}
  register(registerForm:any): Observable<any> {
  const data = {
    username:registerForm.username,
    email:registerForm.email,
    password:registerForm.password,
    roles:[registerForm.roles],
  }
  console.log('data group',data);
    //TODO remove bypass login
    // const environment = env.profile;
    // if (environment == 'local' || environment == 'xplink') {
    //   Object.assign(data, { ipAddress: "10.4.69.120" })
    // }

    // const url = `${env.backendUrl}:${env.httpPort}/${env.backendContextPath}/${MasterStrApiPath.login}`;
    const url = 'http://localhost:3000/api/auth/signup';
    return this.httpClient
      .post<any>(url, data)
      .pipe(
        map(resp => {
         console.log(resp);
     
        }));
  }
}
