import { ApiUrl } from '../constants/app.variable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private _jsonURL = 'assets/data/countries.json';
  headers: HttpHeaders | undefined;

  constructor(private http: HttpClient) {}

  submitProfessionalForm(data: any) {
    const currentUser = JSON.parse(localStorage.getItem('userAccess')!);
    // console.log("current : ",currentUser,"  : localstorage : ",localStorage.getItem('userAccess')!);
    
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      // .set('Access-Control-Allow-Origin', '*')
      .set('Authorization',`Bearer ${currentUser.token}`)
     
    console.log('headers : ', headers, ' currentUser : ', currentUser.token);
    return this.http.post(ApiUrl.professional, data, { headers: headers });

  }

  submitContractorForm(data: any) {
    const currentUser = JSON.parse(localStorage.getItem('userAccess')!);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${currentUser.token}`);

    console.log('headers : ', headers, ' currentUser : ', currentUser);
    return this.http.post(ApiUrl.contractor, data, { headers: headers });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
