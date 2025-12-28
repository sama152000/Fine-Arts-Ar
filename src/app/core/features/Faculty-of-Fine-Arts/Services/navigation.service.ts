import { Injectable } from '@angular/core';
import { MenuItem, DropdownItem } from '../model/navigation.model';
import { DepartmentsService } from './department.service';
import { AboutService } from './about.service';
import { SectorsService } from './sectors.service';
import { UnitsService } from './units.service';
import { CentersService } from './centers.service';
import { ProgramsService } from './programs.service';
import { StudentServicesService } from './student-services.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentService } from '../model/student-service.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  constructor(
    private departmentService: DepartmentsService,
    private aboutService: AboutService,
    private sectorService: SectorsService,
    private unitService: UnitsService,
    private centerService: CentersService,
    private programService: ProgramsService,
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
        dropdownItems: []
      },
      {
        id: 'sectors',
        label: 'القطاعات',
        url: '/sectors',
        dropdownItems: []
      },
      {
        id: 'units',
        label: 'الوحدات',
        url: '/units',
        dropdownItems: []
      },
      {
        id: 'centers',
        label: 'المراكز',
        url: '/centers',
        dropdownItems: []
      },
      {
        id: 'programs',
        label: 'البرامج',
        url: '/programs',
        dropdownItems: []
      },
      { id: 'news', label: 'الأخبار', url: '/news-list' },
      { id: 'student-services', label: 'خدمات الطلاب', url: '/student-services', dropdownItems: [] },
      { id: 'contact', label: 'اتصل بنا', url: '/contact' }
    ];
  }

  getservicesItems(): Observable<DropdownItem[]> {
    return this.studentServicesService.getStudentServices().pipe(
      map(res => {
        if (res.success) {
          return res.data.map((service: StudentService) => ({
            id: service.id.toString(),
            label: service.title,
            url: `/student-services/${service.id}`,
            icon: service.iconPath
          }));
        }
        return [];
      })
    );
  }

  getDepartmentsDropdownItems(): Observable<DropdownItem[]> {
    return this.departmentService.getDepartments().pipe(
      map(res => {
        if (res.success) {
          return res.data.map(dept => ({
            id: dept.id.toString(),
            label: dept.name,
            url: `/departments/${dept.id}`,
            icon: 'pi pi-building',
            dropdownItems: [
              {
                id: 'overview',
                label: 'نبذة عامة',
                url: `/departments/${dept.id}`,
                icon: 'pi pi-info-circle'
              },
              {
                id: 'vision-mission',
                label: 'الرؤية & الرسالة',
                url: `/departments/${dept.id}`,
                icon: 'pi pi-eye'
              },
              {
                id: 'head',
                label: 'رئيس القسم',
                url: `/departments/${dept.id}`,
                icon: 'pi pi-user'
              },
              {
                id: 'staff',
                label: 'أعضاء القسم',
                url: `/departments/${dept.id}`,
                icon: 'pi pi-users'
              },
              {
                id: 'programs',
                label: 'البرامج',
                url: `/departments/${dept.id}`,
                icon: 'pi pi-book'
              },
              {
                id: 'services',
                label: 'الخدمات',
                url: `/departments/${dept.id}`,
                icon: 'pi pi-cog'
              }
            ]
          }));
        }
        return [];
      })
    );
  }

  private getAboutDropdownItems(): DropdownItem[] {
    const sections = this.aboutService.getAboutSections();
    return sections.map(section => ({
      id: section.id,
      label: section.title,
      url: `/about/${section.id}`,
      icon: section.icon
    }));
  }

  getSectorDropdownItems(): Observable<DropdownItem[]> {
    return this.sectorService.getSectors().pipe(
      map(res => {
        if (res.success) {
          return res.data.map(sec => ({
            id: sec.id.toString(),
            label: sec.name,
            url: `/sectors/${sec.id}`,
            icon: 'pi pi-building'
          }));
        }
        return [];
      })
    );
  }

  getCenterDropdownItems(): Observable<DropdownItem[]> {
    return this.centerService.getCenters().pipe(
      map(res => {
        if (res.success) {
          return res.data.map(center => ({
            id: center.id,
            label: center.centerName,
            url: `/centers/${center.id}`,
            icon: 'pi pi-home',
            dropdownItems: [
              {
                id: 'overview',
                label: 'نبذة عامة',
                url: `/centers/${center.id}`,
                icon: 'pi pi-info-circle'
              },
              {
                id: 'vision-mission',
                label: 'الرؤية & الرسالة',
                url: `/centers/${center.id}`,
                icon: 'pi pi-eye'
              },
              {
                id: 'head',
                label: 'رئيس المركز',
                url: `/centers/${center.id}`,
                icon: 'pi pi-user'
              },
              {
                id: 'staff',
                label: 'أعضاء المركز',
                url: `/centers/${center.id}`,
                icon: 'pi pi-users'
              }
            ]
          }));
        }
        return [];
      })
    );
  }

  getProgramDropdownItems(): Observable<DropdownItem[]> {
    return this.programService.getPrograms().pipe(
      map(res => {
        if (res.success) {
          return res.data.map(program => ({
            id: program.id,
            label: program.pageTitle,
            url: `/programs/${program.id}`,
            icon: 'pi pi-bookmark',
            dropdownItems: [
              {
                id: 'overview',
                label: 'نبذة عامة',
                url: `/programs/${program.id}`,
                icon: 'pi pi-info-circle'
              },
              {
                id: 'vision-mission',
                label: 'الرؤية & الرسالة',
                url: `/programs/${program.id}`,
                icon: 'pi pi-eye'
              },
              {
                id: 'head',
                label: 'رئيس البرنامج',
                url: `/programs/${program.id}`,
                icon: 'pi pi-user'
              },
              {
                id: 'staff',
                label: 'أعضاء هيئة التدريس',
                url: `/programs/${program.id}`,
                icon: 'pi pi-users'
              }
            ]
          }));
        }
        return [];
      })
    );
  }

  getUnitDropdownItems(): Observable<DropdownItem[]> {
    return this.unitService.getUnits().pipe(
      map(res => {
        if (res.success) {
          return res.data.map(unit => ({
            id: unit.id,
            label: unit.unitTitle,
            url: `/units/${unit.id}`,
            icon: 'pi pi-building'
          }));
        }
        return [];
      })
    );
  }

  // getCenterDropdownItems(): Observable<DropdownItem[]> {
  //   return this.centerService.getCenters().pipe(
  //     map(res => {
  //       if (res.success) {
  //         return res.data.map(center => ({
  //           id: center.id,
  //           label: center.centerTitle,
  //           url: `/centers/${center.id}`,
  //           icon: 'pi pi-home'
  //         }));
  //       }
  //       return [];
  //     })
  //   );
  // }

  // getProgramDropdownItems(): Observable<DropdownItem[]> {
  //   return this.programService.getPrograms().pipe(
  //     map(res => {
  //       if (res.success) {
  //         return res.data.map(program => ({
  //           id: program.id,
  //           label: program.programTitle,
  //           url: `/programs/${program.id}`,
  //           icon: 'pi pi-bookmark'
  //         }));
  //       }
  //       return [];
  //     })
  //   );
  // }
}