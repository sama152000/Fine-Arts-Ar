import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HeroApiResponse, HeroContent, HeroSection } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = environment.apiUrl + 'herosections/getall';

  constructor(private http: HttpClient) {}

  getHeroContent(): Observable<HeroContent> {
    return this.http.get<HeroApiResponse>(this.heroUrl).pipe(
      map(res => {
        if (res.success) {
          const slides = res.data.map(item => ({
            id: item.id,
            title: item.title,
            subtitle: item.subTitle,
            description: item.description,
            isActive: item.isActive,
            imageUrl: item.heroAttachments.length > 0 ? item.heroAttachments[0].url : ''
          }));
          return {
            slides,
            autoplay: true,
            autoplayInterval: 5000
          } as HeroContent;
        }
        return { slides: [] };
      })
    );
  }
}
