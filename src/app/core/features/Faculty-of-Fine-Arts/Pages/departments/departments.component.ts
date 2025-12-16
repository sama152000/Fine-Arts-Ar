import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, DepartmentTab } from '../../model/department.model';
import { DepartmentService } from '../../Services/department.service';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  selectedDepartment: Department | null = null;
  tabs: DepartmentTab[] = [];
  activeTab: string = 'overview';

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  
  ngOnInit() {
    this.departments = this.departmentService.getDepartments();
    this.tabs = this.departmentService.getDepartmentTabs();
    console.log('Departments fetched from service:', this.departments);
    this.cdr.markForCheck();
    
    // First check snapshot params (works on initial navigation), then subscribe for changes
    const snapshotId = this.route.snapshot.paramMap.get('id');
    if (snapshotId) {
      const department = this.departmentService.getDepartmentById(+snapshotId);
      if (department) {
        this.selectDepartment(department);
      }
    } else if (this.departments.length > 0) {
      // no id in route snapshot — select first department by default
      this.selectDepartment(this.departments[0]);
    }

    // Also subscribe to params to handle later navigation changes
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('Route params changed:', params);
      if (id) {
        const department = this.departmentService.getDepartmentById(+id);
        if (department) {
          this.selectDepartment(department);
        } else {
          console.warn('Department id from route not found:', id);
        }
      } else if (!id && this.selectedDepartment) {
        // if params cleared but we have a selected department, restore the URL to keep the id
        console.log('Route params cleared, restoring URL for department:', this.selectedDepartment.id);
        this.router.navigate(['/departments', this.selectedDepartment.id], { replaceUrl: true });
      }
      this.cdr.markForCheck();
    });
  }

  selectDepartment(department: Department) {
    this.selectedDepartment = department;
    this.activeTab = 'overview';
    this.updateTabsActiveState();
    // ensure view updates after loading data

    // Update URL without triggering navigation
    this.router.navigate(['/departments', department.id], { replaceUrl: true });
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.updateTabsActiveState();
    this.cdr.markForCheck();
    console.log('selectTab called with:', tabId, 'activeTab is now:', this.activeTab);
  }

  isTabActive(tabId: string): boolean {
    const result = this.activeTab === tabId;
    if (result) {
      console.log('Tab is active:', tabId, 'activeTab:', this.activeTab);
    }
    return result;
  }

  private updateTabsActiveState() {
    this.tabs.forEach(tab => {
      tab.active = tab.id === this.activeTab;
    });
  }

  getStaffByAcademicRank(rank: string) {
    if (!this.selectedDepartment) return [];
    return this.selectedDepartment.staffMembers.filter(staff => staff.academicRank === rank);
  }

  getStaffByDivision(division: string) {
    if (!this.selectedDepartment) return [];
    return this.selectedDepartment.staffMembers.filter(staff => staff.division === division);
  }

  getUniqueAcademicRanks() {
    if (!this.selectedDepartment) return [];
    const ranks = this.selectedDepartment.staffMembers.map(staff => staff.academicRank);
    return [...new Set(ranks)].sort();
  }

  getUniqueDivisions() {
    if (!this.selectedDepartment) return [];
    const divisions = this.selectedDepartment.staffMembers
      .map(staff => staff.division)
      .filter(division => division !== undefined && division !== null);
    return [...new Set(divisions as string[])];
  }
}