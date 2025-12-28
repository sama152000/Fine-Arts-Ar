import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { LogoApiResponse } from '../model/logo.model';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  private logoUrl = environment.apiUrl + 'logos/getall';

  constructor(private http: HttpClient) {}

  getLogos(): Observable<LogoApiResponse> {
    return this.http.get<LogoApiResponse>(this.logoUrl);
  }
}
