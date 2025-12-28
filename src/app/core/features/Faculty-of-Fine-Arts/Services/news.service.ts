import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { PostApiResponse } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private postsUrl = environment.apiUrl + 'posts/getall';

  constructor(private http: HttpClient) {}

  // 📌 Get all posts (الأخبار / الأحداث / المؤتمرات)
  getPosts(): Observable<PostApiResponse> {
    return this.http.get<PostApiResponse>(this.postsUrl);
  }
}
