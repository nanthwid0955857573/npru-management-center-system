import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginSystemService {

  constructor(
    private httpClient: HttpClient,
    // public utils: AppUtils
  ) {}
  
  login(username: any, password: any): Observable<any> {
    const data = {
      username: username,
      password: password,
    };

    //TODO remove bypass login
    // const environment = env.profile;
    // if (environment == 'local' || environment == 'xplink') {
    //   Object.assign(data, { ipAddress: "10.4.69.120" })
    // }

    // const url = `${env.backendUrl}:${env.httpPort}/${env.backendContextPath}/${MasterStrApiPath.login}`;
    const url = 'http://localhost:8080/api/auth/signin';
        console.log('data',data);
    return this.httpClient
      .post<any>(url, data)
      .pipe(
        map((resp) => {
            console.log('service is ',resp);
          // if (resp.data.modeStatus == 'success') {
          //   throw new Error(resp.data.error);
          // }

          return <any>{
            data: <any>resp.data
          };
        })
      );
  }
}
