import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { StudentServiceApiResponse } from '../model/student-service.model';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  private servicesUrl = environment.apiUrl + 'services/getall';

  constructor(private http: HttpClient) {}

  getStudentServices(): Observable<StudentServiceApiResponse> {
    return this.http.get<StudentServiceApiResponse>(this.servicesUrl);
  }
}
