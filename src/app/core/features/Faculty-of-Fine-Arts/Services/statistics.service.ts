import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { StatisticsApiResponse } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private statisticsUrl = environment.apiUrl + 'statistics/getall';

  constructor(private http: HttpClient) {}

  getStatistics(): Observable<StatisticsApiResponse> {
    return this.http.get<StatisticsApiResponse>(this.statisticsUrl);
  }
}
