import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SectorsService } from '../../Services/sectors.service';
import { Sector, SectorTab, SectorService, SectorPost, SectorMember } from '../../model/sector.model';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sectors: Sector[] = [];
  selectedSector: Sector | null = null;
  activeTab = 'overview';

  sectorServices: SectorService[] = [];
  sectorPosts: SectorPost[] = [];
  sectorMembers: SectorMember[] = [];

  tabs: SectorTab[] = [
    { id: 'overview', label: 'نبذه عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس القطاع', icon: 'pi pi-user', active: false },
    { id: 'staff', label: ' هيئة التدريس', icon: 'pi pi-users', active: false },
    { id: 'services', label: 'الخدمات', icon: 'pi pi-cog', active: false },   // ✅ جديد
    { id: 'news', label: 'الأخبار', icon: 'pi pi-bell', active: false }       // ✅ جديد
  ];

  constructor(
    private sectorsService: SectorsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // تحميل القطاعات
    this.sectorsService.getSectors().subscribe(res => {
      if (res.success) {
        this.sectors = res.data;
        if (this.sectors.length > 0) {
          this.selectedSector = this.sectors[0];
        }
      }
    });

    // تحميل الخدمات
    this.sectorsService.getSectorServices().subscribe(res => {
      if (res.success) {
        this.sectorServices = res.data;
      }
    });

    // تحميل الأخبار
    this.sectorsService.getSectorPosts().subscribe(res => {
      if (res.success) {
        this.sectorPosts = res.data;
      }
    });

    // تحميل الأعضاء
    this.sectorsService.getSectorMembers().subscribe(res => {
      if (res.success) {
        this.sectorMembers = res.data;
      }
    });

    // تحديد القطاع من الـ route
    this.route.params.subscribe(params => {
      if (params['id']) {
        const sectorId = params['id'];
        this.selectedSector = this.sectors.find(s => s.id === sectorId) ?? null;
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

  // جلب الخدمات الخاصة بالقطاع المحدد
  getSectorServicesById(): SectorService[] {
    if (!this.selectedSector) return [];
    return this.sectorServices.filter(s => s.sectorId === this.selectedSector!.id);
  }

  // جلب الأخبار الخاصة بالقطاع المحدد
  get sectorPostsById(): SectorPost[] {
    if (!this.selectedSector) return [];
    return this.sectorPosts.filter(p => p.sectorId === this.selectedSector!.id);
  }

 // جلب رئيس القطاع
getSectorLeader(): SectorMember | undefined {
  if (!this.selectedSector) return undefined;
  return this.sectorMembers.find(
    (p: SectorMember) => p.sectorId === this.selectedSector!.id && p.isLeader
  );
}

  getSectorStaff():SectorMember[]{
      if (!this.selectedSector) return [];
    return this.sectorMembers.filter((p: SectorMember) => p.sectorId === this.selectedSector!.id );
  
  }
}


