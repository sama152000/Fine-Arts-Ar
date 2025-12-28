import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { 
  UnitApiResponse, 
  UnitDetailApiResponse, 
  UnitMemberApiResponse 
} from '../model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private unitUrl = environment.apiUrl + 'unit/getall';
  private unitDetailUrl = environment.apiUrl + 'unitdetail/getall';
  private unitMemberUrl = environment.apiUrl + 'unitmember/getall';

  constructor(private http: HttpClient) {}

  // 📌 Get all units
  getUnits(): Observable<UnitApiResponse> {
    return this.http.get<UnitApiResponse>(this.unitUrl);
  }

  // 📌 Get unit details
  getUnitDetails(): Observable<UnitDetailApiResponse> {
    return this.http.get<UnitDetailApiResponse>(this.unitDetailUrl);
  }

  // 📌 Get unit members
  getUnitMembers(): Observable<UnitMemberApiResponse> {
    return this.http.get<UnitMemberApiResponse>(this.unitMemberUrl);
  }
}
