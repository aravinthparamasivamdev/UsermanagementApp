import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { ISummaryDetails } from '../models/ISummaryDetails';
import { IUserDetails } from '../models/IUserDetails';
import { IUserInfo } from '../models/IUserInfo';

@Injectable({
  providedIn: 'root'
})
export class MiddleLayerService {
  constructor(private http: HttpClient) { }

  getUserDetails(id: number): Promise<IUserInfo> {
    return this.http.get<IUserInfo>(environment.apiBaseUrl + environment.summaryUserDetailsAPI + "/" + id).toPromise<IUserInfo>()
  }
  getUserSummaryDetails(pageNumber: number): Promise<ISummaryDetails> {
    return this.http.get<ISummaryDetails>(environment.apiBaseUrl + environment.summaryUserDetailsAPI + "?page=" + pageNumber).toPromise<ISummaryDetails>()
  }

  saveUserSummaryDetails(userDetails: any): Promise<ISummaryDetails> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.token}`
    }
    return this.http.post<any>(environment.apiBaseUrl + environment.summaryUserDetailsAPI, userDetails, { headers }).toPromise<ISummaryDetails>()
  }
}
