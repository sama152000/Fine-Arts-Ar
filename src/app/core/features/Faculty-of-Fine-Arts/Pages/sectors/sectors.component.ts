import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorsService } from '../../Services/sectors.service';
import { Sector, SectorTab } from '../../model/sector.model';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sectors: Sector[] = [];
  selectedSector: Sector | null = null;
  activeTab = 'overview';
  
  tabs: SectorTab[] = [
    { id: 'overview', label: 'نبذه عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس القطاع', icon: 'pi pi-user', active: false },
    { id: 'staff', label: 'اعضائ هيئه التدريس', icon: 'pi pi-users', active: false }
  ];

  constructor(
    private sectorsService: SectorsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sectors = this.sectorsService.getSectors();
    
    // Check for sector ID in route params
    this.route.params.subscribe(params => {
      if (params['id']) {
        const sectorId = parseInt(params['id']);
        this.selectedSector = this.sectorsService.getSectorById(sectorId) ?? null;
      } else if (this.sectors.length > 0) {
        this.selectedSector = this.sectors[0];
      }
    });
  }

  selectSector(sector: Sector) {
    this.selectedSector = sector;
    this.router.navigate(['/sectors', sector.id]);
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
  }

  getUniqueAcademicRanks(): string[] {
    if (!this.selectedSector) return [];
    const ranks = this.selectedSector.staffMembers.map(staff => staff.academicRank);
    return [...new Set(ranks)];
  }

  getStaffByAcademicRank(rank: string) {
    if (!this.selectedSector) return [];
    return this.selectedSector.staffMembers.filter(staff => staff.academicRank === rank);
  }

  getUniqueDivisions(): string[] {
    if (!this.selectedSector || !this.selectedSector.divisions) return [];
    return this.selectedSector.divisions;
  }

  getStaffByDivision(division: string) {
    if (!this.selectedSector) return [];
    return this.selectedSector.staffMembers.filter(staff => staff.division === division);
  }
}