import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitsService } from '../../Services/units.service';
import { Unit, UnitTab } from '../../model/unit.model';

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
  activeTab = 'overview';
  
  tabs: UnitTab[] = [
    { id: 'overview', label: 'نبذة عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس الوحدة', icon: 'pi pi-user', active: false },
    // { id: 'staff', label: 'Staff Members', icon: 'pi pi-users', active: true }
  ];

  constructor(
    private unitsService: UnitsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.units = this.unitsService.getUnits();
    // set a sensible default immediately so the template has data
    if (this.units.length > 0) {
      this.selectedUnit = this.units[0];
    }

    // Check for unit ID in route params and update selection when it changes
    const snapshotId = this.route.snapshot.paramMap.get('id');
    if (snapshotId) {
      const unitId = parseInt(snapshotId, 10);
      this.selectedUnit = this.unitsService.getUnitById(unitId) ?? this.selectedUnit;
    }

    this.tabs.forEach(tab => tab.active = (tab.id === this.activeTab));

    this.route.params.subscribe(params => {
      if (params['id']) {
        const unitId = parseInt(params['id']);
        this.selectedUnit = this.unitsService.getUnitById(unitId) ?? this.selectedUnit;
      }
    });
  }

  selectUnit(unit: Unit) {
    this.selectedUnit = unit;
    this.router.navigate(['/units', unit.id]);
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
  }

  getUniquePositions(): string[] {
    if (!this.selectedUnit) return [];
    const positions = this.selectedUnit.staffMembers.map(staff => staff.position);
    return [...new Set(positions)];
  }

  getStaffByPosition(position: string) {
    if (!this.selectedUnit) return [];
    return this.selectedUnit.staffMembers.filter(staff => staff.position === position);
  }

  getUniqueDivisions(): string[] {
    if (!this.selectedUnit || !this.selectedUnit.divisions) return [];
    return this.selectedUnit.divisions;
  }

  getStaffByDivision(division: string) {
    if (!this.selectedUnit) return [];
    return this.selectedUnit.staffMembers.filter(staff => staff.division === division);
  }
}