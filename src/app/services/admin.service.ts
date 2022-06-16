import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../constants/app.variable';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  headers: any;
  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('userAccess')!);
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${currentUser.token}`);
  }

  getContractualMemberList() {
    return this.http.get(ApiUrl.contractor, { headers: this.headers });
  }

  getProfessionalMemberList() {
    return this.http.get(ApiUrl.professional, { headers: this.headers });
  }

  getContractualWithId(id: string) {
    return this.http.get(ApiUrl.contractor + '/' + id, {
      headers: this.headers,
    });
  }

  getProfessionalWithId(id: string) {
    return this.http.get(ApiUrl.professional + '/' + id, {
      headers: this.headers,
    });
  }

  editProfesionalProfile(id: any, data: any) {
    return this.http.patch(ApiUrl.professional + '/' + id, data, {
      headers: this.headers,
    });
  }

  editContractualProfile(id: any, data: any) {
    return this.http.patch(ApiUrl.contractor + '/' + id, data, {
      headers: this.headers,
    });
  }

  approveProfessionalProfile(id: any) {
    var body = '';
    return this.http.patch(`${ApiUrl.professioanlApprove}/${id}`, body, {
      headers: this.headers,
    });
  }

  paidProfessionalProfile(id: any) {
    var body = '';
    return this.http.patch(`${ApiUrl.professionalPayment}/${id}`, body, {
      headers: this.headers,
    });
  }

  approveContractualProfile(id: any) {
    return this.http.patch(ApiUrl.contractualApprove, id, {
      headers: this.headers,
    });
  }

  paidContractualProfile(id: any) {
    return this.http.patch(ApiUrl.contractualPayment, id, {
      headers: this.headers,
    });
  }

  signProfessionalProfile(id: any) {
    return this.http.patch(ApiUrl.professionalSign, id, {
      headers: this.headers,
    });
  }

  signContractualProfile(id: any) {
    return this.http.patch(ApiUrl.contractualSign, id, {
      headers: this.headers,
    });
  }

  educationEditNew(body: any) {
    return this.http.post(ApiUrl.education, body, { headers: this.headers });
  }

  constructionPropertyEditNew(body: any) {
    return this.http.post(ApiUrl.constructionProperty, body, {
      headers: this.headers,
    });
  }
  projectsEditNew(body: any) {
    return this.http.post(ApiUrl.projects, body, {
      headers: this.headers,
    });
  }

  shareHoldersEditNew(body: any) {
    return this.http.post(ApiUrl.shareholders, body, {
      headers: this.headers,
    });
  }

  employmentRecordEditNew(body: any) {
    return this.http.post(ApiUrl.employmentRecord, body, {
      headers: this.headers,
    });
  }
  conEmploymentRecordEditNew(body: any) {
    return this.http.post(ApiUrl.conEmploymentRecord, body, {
      headers: this.headers,
    });
  }

  educationEdit(body: any) {
    return this.http.patch(ApiUrl.education + '/' + body.id, body, {
      headers: this.headers,
    });
  }
  constructionPropertyEdit(body: any) {
    return this.http.patch(ApiUrl.constructionProperty + '/' + body.id, {
      headers: this.headers,
    });
  }
  projectsEdit(body: any) {
    return this.http.post(ApiUrl.projects + '/' + body.id, {
      headers: this.headers,
    });
  }

  shareHoldersEdit(body: any) {
    return this.http.post(ApiUrl.shareholders + '/' + body, {
      headers: this.headers,
    });
  }

  educationDelete(id: any) {
    return this.http.delete(ApiUrl.education + '/' + id, {
      headers: this.headers,
    });
  }

  constructionPropertyDelete(id: any) {
    return this.http.delete(ApiUrl.constructionProperty + '/' + id, {
      headers: this.headers,
    });
  }
  projectsDelete(id: any) {
    return this.http.delete(ApiUrl.projects + '/' + id, {
      headers: this.headers,
    });
  }

  shareholdersDelete(id: any) {
    return this.http.delete(ApiUrl.shareholders + '/' + id, {
      headers: this.headers,
    });
  }

  employmentRecordEdit(body: any) {
    return this.http.patch(ApiUrl.employmentRecord + '/' + body.id, body, {
      headers: this.headers,
    });
  }
  conEmploymentRecordEdit(body: any) {
    return this.http.patch(ApiUrl.conEmploymentRecord + '/' + body.id, body, {
      headers: this.headers,
    });
  }

  employmentRecordDelete(id: any) {
    return this.http.delete(ApiUrl.employmentRecord + '/' + id, {
      headers: this.headers,
    });
  }

  conEmploymentRecordDelete(id: any) {
    return this.http.delete(ApiUrl.conEmploymentRecord + '/' + id, {
      headers: this.headers,
    });
  }
}
