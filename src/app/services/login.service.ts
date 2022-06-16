import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../constants/app.variable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signinWith(email:any,password:any){
    var data = {
      username: email,
      password: password
    }
    return this.http.post(ApiUrl.login,data).toPromise();
  }

}
