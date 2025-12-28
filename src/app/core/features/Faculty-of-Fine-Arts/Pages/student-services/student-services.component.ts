import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    { id: 'overview', label: 'تفاصيل الخدمة', icon: 'pi pi-info-circle', active: true },
  ];

  constructor(
    private studentServicesService: StudentServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // جلب البيانات من الـ API
    this.studentServicesService.getStudentServices().subscribe(res => {
      if (res.success) {
        this.studentServices = res.data;

        // اختيار أول خدمة أو الخدمة حسب الـ route param
        this.route.params.subscribe(params => {
          if (params['id']) {
            const serviceId = params['id'];
            this.selectedService = this.studentServices.find(s => s.id === serviceId) ?? null;
          } else if (this.studentServices.length > 0) {
            this.selectedService = this.studentServices[0];
          }
        });
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
    this.cdr.detectChanges();
  }
}
