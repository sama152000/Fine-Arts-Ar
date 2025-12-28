import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {
  Program,
  ProgramApiResponse,
  ProgramDetailApiResponse,
  ProgramMemberApiResponse
} from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private programUrl = environment.apiUrl + 'program/getall';
  private programDetailUrl = environment.apiUrl + 'programdetail/getall';
  private programMemberUrl = environment.apiUrl + 'programmember/getall';

  constructor(private http: HttpClient) {}

  // 📌 Get all programs
  getPrograms(): Observable<ProgramApiResponse> {
    return this.http.get<ProgramApiResponse>(this.programUrl);
  }

  // 📌 Get program details
  getProgramDetails(): Observable<ProgramDetailApiResponse> {
    return this.http.get<ProgramDetailApiResponse>(this.programDetailUrl);
  }

  // 📌 Get program members
  getProgramMembers(): Observable<ProgramMemberApiResponse> {
    return this.http.get<ProgramMemberApiResponse>(this.programMemberUrl);
  }
}
