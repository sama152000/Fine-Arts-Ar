import { Injectable } from '@angular/core';
import { Statistic } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  getStatistics(): Statistic[] {
    return [
      {
        id: 1,
        label: 'الطلاب المقيدون',
        value: 1567,
        icon: 'pi pi-users',
        suffix: '+',
        description: 'طلاب نشطون في جميع البرامج'
      },
      {
        id: 2,
        label: 'الأقسام الأكاديمية',
        value: 6,
        icon: 'pi pi-building',
        description: 'أقسام وبرامج أكاديمية متخصصة'
      },
      {
        id: 3,
        label: 'المعارض السنوية',
        value: 24,
        icon: 'pi pi-image',
        suffix: '+',
        description: 'معارض سنوية للطلاب وأعضاء هيئة التدريس'
      },
      {
        id: 4,
        label: 'أعضاء هيئة التدريس',
        value: 48,
        icon: 'pi pi-user',
        description: 'أساتذة ومحاضرون ذوو خبرة'
      },
      {
        id: 5,
        label: 'الاستوديوهات الفنية',
        value: 15,
        icon: 'pi pi-home',
        description: 'استوديوهات وورش فنية احترافية'
      },
      {
        id: 6,
        label: 'سنوات من التميز',
        value: 29,
        icon: 'pi pi-star',
        description: 'نخدم المجتمع الفني منذ عام 1995'
      },
      {
        id: 7,
        label: 'نجاحات الخريجين',
        value: 2300,
        icon: 'pi pi-trophy',
        suffix: '+',
        description: 'خريجون ناجحون في مختلف المجالات'
      },
      {
        id: 8,
        label: 'الشركاء الدوليون',
        value: 12,
        icon: 'pi pi-globe',
        description: 'تعاونات مع مؤسسات عالمية'
      }
    ];
  }
}
