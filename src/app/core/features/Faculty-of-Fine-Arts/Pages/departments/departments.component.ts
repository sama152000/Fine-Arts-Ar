import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DepartmentsService } from '../../Services/department.service';
import { Department, DepartmentTab, DepartmentDetail, DepartmentMember, DepartmentProgram, DepartmentService } from '../../model/department.model';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  selectedDepartment: Department | null = null;

  departmentDetails: DepartmentDetail[] = [];
  departmentMembers: DepartmentMember[] = [];
  departmentPrograms: DepartmentProgram[] = [];
  departmentServices: DepartmentService[] = [];

  tabs: DepartmentTab[] = [
    { id: 'overview', label: 'نبذة عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس القسم', icon: 'pi pi-user', active: false },
    { id: 'staff', label: 'أعضاء القسم', icon: 'pi pi-users', active: false },
    { id: 'services', label: 'الخدمات', icon: 'pi pi-cog', active: false }
  ];
  activeTab: string = 'overview';

  constructor(
    private departmentsService: DepartmentsService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // تحميل الأقسام
    this.departmentsService.getDepartments().subscribe(res => {
      if (res.success) {
        this.departments = res.data;
        if (this.departments.length > 0) {
          this.selectedDepartment = this.departments[0];
        }
      }
    });

    // تحميل تفاصيل الأقسام
    this.departmentsService.getDepartmentDetails().subscribe(res => {
      if (res.success) {
        this.departmentDetails = res.data;
      }
    });

    // تحميل أعضاء الأقسام
    this.departmentsService.getDepartmentMembers().subscribe(res => {
      if (res.success) {
        this.departmentMembers = res.data;
      }
    });

    // تحميل البرامج التابعة للأقسام
    this.departmentsService.getDepartmentPrograms().subscribe(res => {
      if (res.success) {
        this.departmentPrograms = res.data;
      }
    });

    // تحميل الخدمات التابعة للأقسام
    this.departmentsService.getDepartmentServices().subscribe(res => {
      if (res.success) {
        this.departmentServices = res.data;
      }
    });

    // تحديد القسم من الـ route
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.selectedDepartment = this.departments.find(d => d.id === id) ?? this.selectedDepartment;
      }
    });

    this.updateTabsActiveState();
    this.cdr.markForCheck();
  }

  selectDepartment(department: Department) {
    this.selectedDepartment = department;
    this.activeTab = 'overview';
    this.updateTabsActiveState();
    this.router.navigate(['/departments', department.id], { replaceUrl: true });
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.updateTabsActiveState();
    this.cdr.markForCheck();
  }

  isTabActive(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  private updateTabsActiveState() {
    this.tabs.forEach(tab => {
      tab.active = tab.id === this.activeTab;
    });
  }

  // جلب تفاصيل القسم المحدد
  getSelectedDepartmentDetails(): DepartmentDetail | undefined {
    if (!this.selectedDepartment) return undefined;
    return this.departmentDetails.find(d => d.departmentId === this.selectedDepartment!.id);
  }

  // جلب أعضاء القسم المحدد
  getSelectedDepartmentMembers(): DepartmentMember[] {
    if (!this.selectedDepartment) return [];
    return this.departmentMembers.filter(m => m.departmentId === this.selectedDepartment!.id);
  }

  // جلب رئيس القسم
  getDepartmentLeader(): DepartmentMember | undefined {
    return this.getSelectedDepartmentMembers().find(m => m.isLeader);
  }

  // جلب باقي الأعضاء
  getDepartmentStaff(): DepartmentMember[] {
    return this.getSelectedDepartmentMembers().filter(m => !m.isLeader);
  }

  // جلب البرامج التابعة للقسم
  getDepartmentProgramsById(): DepartmentProgram[] {
    if (!this.selectedDepartment) return [];
    return this.departmentPrograms.filter(p => p.departmentId === this.selectedDepartment!.id);
  }

  // جلب الخدمات التابعة للقسم
  getDepartmentServicesById(): DepartmentService[] {
    if (!this.selectedDepartment) return [];
    return this.departmentServices.filter(s => s.departmentId === this.selectedDepartment!.id);
  }

  // جلب عدد أعضاء القسم
  getDepartmentMemberCount(department: Department): number {
    return this.departmentMembers.filter(m => m.departmentId === department.id).length;
  }

  // التنقل إلى صفحة البرنامج
  navigateToProgram(programId: string) {
    this.router.navigate(['/programs', programId]);
  }
}
