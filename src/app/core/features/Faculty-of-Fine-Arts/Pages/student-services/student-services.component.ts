import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServicesService } from '../../Services/student-services.service';
import { StudentService, ServiceTab } from '../../model/student-service.model';

@Component({
  selector: 'app-student-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-services.component.html',
  styleUrls: ['./student-services.component.css']
})
export class StudentServicesComponent implements OnInit {
  studentServices: StudentService[] = [];
  selectedService: StudentService | null = null;
  activeTab = 'overview';
  
  tabs: ServiceTab[] = [
    { id: 'overview', label: 'نيذه عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الروية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس الخدمة', icon: 'pi pi-user', active: false },
    { id: 'staff', label: 'اعضائ هيئة التدريس', icon: 'pi pi-users', active: false }
  ];

  constructor(
    private studentServicesService: StudentServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentServices = this.studentServicesService.getStudentServices();
    
    // Check for service ID in route params
    this.route.params.subscribe(params => {
      if (params['id']) {
        const serviceId = parseInt(params['id']);
        this.selectedService = this.studentServicesService.getStudentServiceById(serviceId) ?? null;
      } else if (this.studentServices.length > 0) {
        this.selectedService = this.studentServices[0];
      }
    });
  }

  selectService(service: StudentService) {
    this.selectedService = service;
    this.router.navigate(['/student-services', service.id]);
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
  }

  getUniquePositions(): string[] {
    if (!this.selectedService) return [];
    const positions = this.selectedService.staffMembers.map(staff => staff.position);
    return [...new Set(positions)];
  }

  getStaffByPosition(position: string) {
    if (!this.selectedService) return [];
    return this.selectedService.staffMembers.filter(staff => staff.position === position);
  }

  getUniqueDivisions(): string[] {
    if (!this.selectedService || !this.selectedService.divisions) return [];
    return this.selectedService.divisions;
  }

  getStaffByDivision(division: string) {
    if (!this.selectedService) return [];
    return this.selectedService.staffMembers.filter(staff => staff.division === division);
  }
}