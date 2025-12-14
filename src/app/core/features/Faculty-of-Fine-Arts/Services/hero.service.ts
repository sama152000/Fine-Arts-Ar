import { Injectable } from '@angular/core';
import { HeroContent } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroContent(): HeroContent {
    return {
      autoplay: true,
      autoplayInterval: 5000,
      slides: [
        {
          id: 1,
          imageUrl: './assets/slide1.png',
          title: 'كلية الفنون الجميلة – جامعة الأقصر',
          subtitle: 'إبداع يصنع المستقبل',
          description: 'نوفّر بيئة تعليمية تمزج بين الإبداع والتراث وعلوم الفن الحديثة، لإعداد فنانين قادرين على تشكيل مجتمع بصري أفضل.',
          ctaText: 'اعرف المزيد',
          ctaUrl: '/about',
          active: true
        },
        {
          id: 2,
          imageUrl: './assets/slide2.png',
          title: 'إلهام التميز الفني',
          subtitle: 'حيث يلتقي التراث بالابتكار',
          description: 'تجمع برامجنا بين التقنيات الفنية الكلاسيكية والفنون الرقمية المعاصرة، مما يعزز الإبداع والمهارة التقنية لدى كل طالب.',
          ctaText: 'استكشف البرامج',
          ctaUrl: '/departments',
          active: false
        },
        {
          id: 3,
          imageUrl: './assets/slide3.jpg',
          title: 'معارض وفعاليات ثقافية',
          subtitle: 'عرض إبداعات الطلاب',
          description: 'توفر المعارض والورش والفعاليات الثقافية منصات لعرض إنجازات الطلاب الفنية والتواصل مع المجتمع الفني.',
          ctaText: 'عرض الفعاليات',
          ctaUrl: '/events',
          active: false
        }
      ]
    };
  }
}
