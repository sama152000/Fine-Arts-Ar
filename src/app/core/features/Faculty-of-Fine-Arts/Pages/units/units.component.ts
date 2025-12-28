import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitsService } from '../../Services/units.service';
import { Unit, UnitTab, UnitDetail, UnitMember } from '../../model/unit.model';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  units: Unit[] = [];
  selectedUnit: Unit | null = null;
  unitDetails: UnitDetail[] = [];
  unitMembers: UnitMember[] = [];

  activeTab = 'overview';
  
  tabs: UnitTab[] = [
    { id: 'overview', label: 'نبذة عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس الوحدة', icon: 'pi pi-user', active: false },
    { id: 'staff', label: 'اعضاء هيئة التدريس', icon: 'pi pi-users', active: false }
  ];

  constructor(
    private unitsService: UnitsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // تحميل الوحدات
    this.unitsService.getUnits().subscribe(res => {
      if (res.success) {
        this.units = res.data;
        if (this.units.length > 0) {
          this.selectedUnit = this.units[0];
        }
      }
    });

    // تحميل تفاصيل الوحدات
    this.unitsService.getUnitDetails().subscribe(res => {
      if (res.success) {
        this.unitDetails = res.data;
      }
    });

    // تحميل أعضاء الوحدات
    this.unitsService.getUnitMembers().subscribe(res => {
      if (res.success) {
        this.unitMembers = res.data;
      }
    });

    // تحديد الوحدة من الـ route
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.selectedUnit = this.units.find(u => u.id === id) ?? this.selectedUnit;
      }
    });

    this.tabs.forEach(tab => tab.active = (tab.id === this.activeTab));
  }

  selectUnit(unit: Unit) {
    this.selectedUnit = unit;
    this.router.navigate(['/units', unit.id]);
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
  }

  // جلب تفاصيل الوحدة المحددة
  getSelectedUnitDetails(): UnitDetail | undefined {
    if (!this.selectedUnit) return undefined;
    return this.unitDetails.find(d => d.unitId === this.selectedUnit!.id);
  }

  // جلب أعضاء الوحدة المحددة
  getSelectedUnitMembers(): UnitMember[] {
    if (!this.selectedUnit) return [];
    return this.unitMembers.filter(m => m.unitId === this.selectedUnit!.id);
  }

  // جلب رئيس الوحدة
  getUnitLeader(): UnitMember | undefined {
    return this.getSelectedUnitMembers().find(m => m.isLeader);
  }

  // جلب باقي الأعضاء
  getUnitStaff(): UnitMember[] {
    return this.getSelectedUnitMembers().filter(m => !m.isLeader);
  }

  // جلب عدد أعضاء الوحدة
  getUnitMemberCount(unit: Unit): number {
    return this.unitMembers.filter(m => m.unitId === unit.id).length;
  }
}
