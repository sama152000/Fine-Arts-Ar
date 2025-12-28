import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CentersService } from '../../Services/centers.service';
import { Center, CenterTab, CenterDetail, CenterMember } from '../../model/center.model';

@Component({
  selector: 'app-centers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {
  centers: Center[] = [];
  selectedCenter: Center | null = null;
  centerDetails: CenterDetail[] = [];
  centerMembers: CenterMember[] = [];

  activeTab = 'overview';
  
  tabs: CenterTab[] = [
    { id: 'overview', label: 'نبذة عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس المركز', icon: 'pi pi-user', active: false },
    { id: 'staff', label: 'أعضاء المركز', icon: 'pi pi-users', active: false }
  ];

  constructor(
    private centersService: CentersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // تحميل المراكز
    this.centersService.getCenters().subscribe(res => {
      if (res.success) {
        this.centers = res.data;
        if (this.centers.length > 0) {
          this.selectedCenter = this.centers[0];
        }
      }
    });

    // تحميل تفاصيل المراكز
    this.centersService.getCenterDetails().subscribe(res => {
      if (res.success) {
        this.centerDetails = res.data;
      }
    });

    // تحميل أعضاء المراكز
    this.centersService.getCenterMembers().subscribe(res => {
      if (res.success) {
        this.centerMembers = res.data;
      }
    });

    // تحديد المركز من الـ route
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.selectedCenter = this.centers.find(c => c.id === id) ?? this.selectedCenter;
      }
    });

    this.tabs.forEach(tab => tab.active = (tab.id === this.activeTab));
  }

  selectCenter(center: Center) {
    this.selectedCenter = center;
    this.router.navigate(['/centers', center.id]);
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
  }

  // جلب تفاصيل المركز المحدد
  getSelectedCenterDetails(): CenterDetail | undefined {
    if (!this.selectedCenter) return undefined;
    return this.centerDetails.find(d => d.centerId === this.selectedCenter!.id);
  }

  // جلب أعضاء المركز المحدد
  getSelectedCenterMembers(): CenterMember[] {
    if (!this.selectedCenter) return [];
    return this.centerMembers.filter(m => m.centerId === this.selectedCenter!.id);
  }

  // جلب رئيس المركز
  getCenterLeader(): CenterMember | undefined {
    return this.getSelectedCenterMembers().find(m => m.isLeader);
  }

  // جلب باقي الأعضاء
  getCenterStaff(): CenterMember[] {
    return this.getSelectedCenterMembers().filter(m => !m.isLeader);
  }

  // جلب عدد أعضاء المركز
  getCenterMemberCount(center: Center): number {
    return this.centerMembers.filter(m => m.centerId === center.id).length;
  }
}
