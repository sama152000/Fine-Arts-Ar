import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { 
  DepartmentApiResponse,
  DepartmentDetailApiResponse,
  DepartmentMemberApiResponse,
  DepartmentProgramApiResponse,
  DepartmentServiceApiResponse
} from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private departmentUrl = environment.apiUrl + 'departments/getall';
  private departmentDetailUrl = environment.apiUrl + 'departmentdetails/getall';
  private departmentMemberUrl = environment.apiUrl + 'departmentmembers/getall';
  private departmentProgramUrl = environment.apiUrl + 'departmentprograms/getall';
  private departmentServiceUrl = environment.apiUrl + 'departmentservices/getall';

  constructor(private http: HttpClient) {}

  // 📌 Get all departments
  getDepartments(): Observable<DepartmentApiResponse> {
    return this.http.get<DepartmentApiResponse>(this.departmentUrl);
  }

  // 📌 Get department details
  getDepartmentDetails(): Observable<DepartmentDetailApiResponse> {
    return this.http.get<DepartmentDetailApiResponse>(this.departmentDetailUrl);
  }

  // 📌 Get department members
  getDepartmentMembers(): Observable<DepartmentMemberApiResponse> {
    return this.http.get<DepartmentMemberApiResponse>(this.departmentMemberUrl);
  }

  // 📌 Get department programs
  getDepartmentPrograms(): Observable<DepartmentProgramApiResponse> {
    return this.http.get<DepartmentProgramApiResponse>(this.departmentProgramUrl);
  }

  // 📌 Get department services
  getDepartmentServices(): Observable<DepartmentServiceApiResponse> {
    return this.http.get<DepartmentServiceApiResponse>(this.departmentServiceUrl);
  }
}
