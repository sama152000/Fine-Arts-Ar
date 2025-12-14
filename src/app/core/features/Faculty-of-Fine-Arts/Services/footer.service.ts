import { Injectable } from '@angular/core';
import { FooterData } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  getFooterData(): FooterData {
    return {
      logo: '/assets/logo.png',
      description: 'تهدف كلية الفنون الجميلة بجامعة الأقصر إلى تقديم تعليم فني متميز وإعداد أجيال مبدعة في مختلف مجالات الفنون الجميلة.',
      sections: [
        {
          title: 'روابط هامة',
          links: [
            { label: 'الرئيسية', url: '/' },
            { label: 'عن الكلية', url: '/about' },
            { label: 'الأقسام الأكاديمية', url: '/departments' },
            { label: 'الأخبار', url: '/news-list' },
            { label: 'اتصل بنا', url: '/contact' }
          ]
        },
        {
          title: 'روابط سريعة',
          links: [
            { label: 'الخدمات', url: '/student-services' },
            { label: 'الأخبار', url: '/news-list' },
            { label: 'الوحدات والمراكز', url: '/units' },
            { label: 'الأقسام الأكاديمية', url: '/departments' }
          ]
        }
      ],
      contactInfo: {
        address: 'جامعة الأقصر – كلية الفنون الجميلة، الأقصر، مصر',
        phone: '+20 95 237 1234',
        email: 'info@finearts.luxor.edu.eg',
        workingHours: 'من الأحد إلى الخميس – 9:00 صباحًا حتى 3:00 مساءً'
      },
      socialLinks: [
        { platform: 'Facebook', url: 'https://facebook.com/fineartsluxor', icon: 'fab fa-facebook-f' },
        { platform: 'Instagram', url: 'https://instagram.com/fineartsluxor', icon: 'fab fa-instagram' },
        { platform: 'YouTube', url: 'https://youtube.com/fineartsluxor', icon: 'fab fa-youtube' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/school/fineartsluxor', icon: 'fab fa-linkedin-in' }
      ],
      copyrightText: '© 2025 كلية الفنون الجميلة – جامعة الأقصر. جميع الحقوق محفوظة.'
    };
  }
}
