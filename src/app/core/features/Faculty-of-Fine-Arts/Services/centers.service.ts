import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { 
  CenterApiResponse, 
  CenterDetailApiResponse, 
  CenterMemberApiResponse 
} from '../model/center.model';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  private centerUrl = environment.apiUrl + 'center/getall';
  private centerDetailUrl = environment.apiUrl + 'centerdetail/getall';
  private centerMemberUrl = environment.apiUrl + 'centermember/getall';

  constructor(private http: HttpClient) {}

  // 📌 Get all centers
  getCenters(): Observable<CenterApiResponse> {
    return this.http.get<CenterApiResponse>(this.centerUrl);
  }

  // 📌 Get center details
  getCenterDetails(): Observable<CenterDetailApiResponse> {
    return this.http.get<CenterDetailApiResponse>(this.centerDetailUrl);
  }

  // 📌 Get center members
  getCenterMembers(): Observable<CenterMemberApiResponse> {
    return this.http.get<CenterMemberApiResponse>(this.centerMemberUrl);
  }
}
