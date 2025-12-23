import { Injectable } from '@angular/core';
import { MenuItem,DropdownItem } from '../model/navigation.model';
import { DepartmentService } from './department.service';
import { AboutService } from './about.service';
import { SectorsService } from './sectors.service';
import { UnitsService } from './units.service';
import { StudentServicesService } from './student-services.service';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  constructor(
    private departmentService: DepartmentService,
    private aboutService: AboutService,
    private sectorService: SectorsService,
    private unitService: UnitsService,
        private studentServicesService: StudentServicesService

  ) {}

  getMainMenuItems(): MenuItem[] {
    return [
      { id: 'home', label: 'الرئيسية', url: '/', active: true },
      {
        id: 'about',
        label: 'عن الكلية',
        url: '/about',
        dropdownItems: this.getAboutDropdownItems()
      },
      {
        id: 'departments',
        label: 'الأقسام الأكاديمية',
        url: '/departments',
        dropdownItems: this.getDepartments()
      },
      {
        id: 'sectors',
        label: 'القطاعات',
        url: '/sectors',
        dropdownItems: this.getSectorDropdownItems()
      },
      {
        id: 'units',
        label: 'الوحدات والمراكز',
        url: '/units',
        dropdownItems: this.getUnitDropdownItems()
      },
      { id: 'news', label: 'الأخبار', url: '/news-list' },
      { id: 'student-services', label: 'خدمات الطلاب', url: '/student-services' ,dropdownItems :this.getservicesItems()},
      { id: 'contact', label: 'اتصل بنا', url: '/contact' }
    ];
  }


  private getservicesItems(): DropdownItem[] {
    const services = this.studentServicesService.getStudentServices();
    return services.map(service => ({
      id: service.id.toString(),
      label: service.name,
      url: `/student-services/${service.id}`,
      icon: service.icon
    }));
  }

private getDepartments() {
  const departments = this.departmentService.getDepartments();
  return departments.map(dept => ({
    id: dept.id,  
    label: dept.name,
    url: `/departments/${dept.id}`,
    icon: dept.icon
  }));
}


  private getAboutDropdownItems() {
    const sections = this.aboutService.getAboutSections();
    return sections.map(section => ({
      label: section.title,
      url: `/about/${section.id}`,
      icon: section.icon
    }));
  }

  private getSectorDropdownItems() {
    const sectors = this.sectorService.getSectors();
    return sectors.map(sec => ({
      label: sec.name,
      url: `/sectors/${sec.id}`,
      icon: sec.icon
    }));
  }

  private getUnitDropdownItems() {
    const units = this.unitService.getUnits();
    return units.map(unit => ({
      label: unit.name,
      url: `/units/${unit.id}`,
      icon: unit.icon
    }));
  }
}
