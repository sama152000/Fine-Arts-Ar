import { Injectable } from '@angular/core';
import { MenuItem, SocialLink, LanguageOption } from '../model/navigation.model';
import { Department } from '../model/department.model';
import { AboutSection } from '../model/about.model';
import { DepartmentService } from './department.service';
import { AboutService } from './about.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  constructor(
    private departmentService: DepartmentService,
    private aboutService: AboutService
  ) {}

  getMainMenuItems(): MenuItem[] {
    return [
      { label: 'الرئيسية', url: '/', active: true },
      { 
        label: 'عن الكلية', 
        url: '/about',
        dropdownItems: this.getAboutDropdownItems()
      },
      { 
        label: 'الأقسام الأكاديمية', 
        url: '/departments',
        dropdownItems: this.getDepartmentDropdownItems()
      },
      { label: 'القطاعات', url: '/sectors' },
      { label: 'الوحدات والمراكز', url: '/units' },
      { label: 'الأخبار', url: '/news-list' },
      { label: 'خدمات الطلاب', url: '/student-services' },
      { label: 'اتصل بنا', url: '/contact' }
    ];
  }

  private getDepartmentDropdownItems() {
    const departments = this.departmentService.getDepartments();
    return departments.map(dept => ({
      label: dept.name, // تمت ترجمة أسماء الأقسام داخل الـ DepartmentService بالفعل
      url: `/departments/${dept.id}`,
      icon: dept.icon
    }));
  }

  private getAboutDropdownItems() {
    const sections = this.aboutService.getAboutSections();
    return sections.map(section => ({
      label: section.title, // تمت ترجمة العناوين داخل AboutService
      url: `/about/${section.id}`,
      icon: section.icon
    }));
  }
}
