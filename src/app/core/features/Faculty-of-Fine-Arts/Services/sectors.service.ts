import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { 
  SectorApiResponse,
  SectorDetailApiResponse,
  SectorMemberApiResponse,
  SectorPostApiResponse,
  SectorProgramApiResponse,
  SectorServiceApiResponse
} from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  private sectorUrl = environment.apiUrl + 'sectors/getall';
  private sectorDetailUrl = environment.apiUrl + 'sectordetails/getall';
  private sectorMemberUrl = environment.apiUrl + 'sectormember/getall';
  private sectorPostUrl = environment.apiUrl + 'sectorposts/getall';
  private sectorProgramUrl = environment.apiUrl + 'sectorprograms/getall';
  private sectorServiceUrl = environment.apiUrl + 'sectorservices/getall';

  constructor(private http: HttpClient) {}

  // 📌 Get all sectors
  getSectors(): Observable<SectorApiResponse> {
    return this.http.get<SectorApiResponse>(this.sectorUrl);
  }

  // 📌 Get sector details
  getSectorDetails(): Observable<SectorDetailApiResponse> {
    return this.http.get<SectorDetailApiResponse>(this.sectorDetailUrl);
  }

  // 📌 Get sector members
  getSectorMembers(): Observable<SectorMemberApiResponse> {
    return this.http.get<SectorMemberApiResponse>(this.sectorMemberUrl);
  }

  // 📌 Get sector posts
  getSectorPosts(): Observable<SectorPostApiResponse> {
    return this.http.get<SectorPostApiResponse>(this.sectorPostUrl);
  }

  // 📌 Get sector programs
  getSectorPrograms(): Observable<SectorProgramApiResponse> {
    return this.http.get<SectorProgramApiResponse>(this.sectorProgramUrl);
  }

  // 📌 Get sector services
  getSectorServices(): Observable<SectorServiceApiResponse> {
    return this.http.get<SectorServiceApiResponse>(this.sectorServiceUrl);
  }
}
