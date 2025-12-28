import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from '../../Services/programs.service';
import { Program, ProgramTab, ProgramDetail, ProgramMember } from '../../model/program.model';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs: Program[] = [];
  selectedProgram: Program | null = null;
  programDetails: ProgramDetail[] = [];
  programMembers: ProgramMember[] = [];

  activeTab = 'overview';
  
  tabs: ProgramTab[] = [
    { id: 'overview', label: 'نبذة عامة', icon: 'pi pi-info-circle', active: true },
    { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
    { id: 'head', label: 'رئيس البرنامج', icon: 'pi pi-user', active: false },
    { id: 'staff', label: 'أعضاء هيئة التدريس', icon: 'pi pi-users', active: false }
  ];

  constructor(
    private programsService: ProgramsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // تحميل البرامج
    this.programsService.getPrograms().subscribe(res => {
      if (res.success) {
        this.programs = res.data;
        if (this.programs.length > 0) {
          this.selectedProgram = this.programs[0];
        }
      }
    });

    // تحميل تفاصيل البرامج
    this.programsService.getProgramDetails().subscribe(res => {
      if (res.success) {
        this.programDetails = res.data;
      }
    });

    // تحميل أعضاء البرامج
    this.programsService.getProgramMembers().subscribe(res => {
      if (res.success) {
        this.programMembers = res.data;
      }
    });

    // تحديد البرنامج من الـ route
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.selectedProgram = this.programs.find(p => p.id === id) ?? this.selectedProgram;
      }
    });

    this.tabs.forEach(tab => tab.active = (tab.id === this.activeTab));
  }

  selectProgram(program: Program) {
    this.selectedProgram = program;
    this.router.navigate(['/programs', program.id]);
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.tabs.forEach(tab => tab.active = tab.id === tabId);
  }

  // جلب تفاصيل البرنامج المحدد
  getSelectedProgramDetails(): ProgramDetail | undefined {
    if (!this.selectedProgram) return undefined;
    return this.programDetails.find(d => d.programId === this.selectedProgram!.id);
  }

  // جلب أعضاء البرنامج المحدد
  getSelectedProgramMembers(): ProgramMember[] {
    if (!this.selectedProgram) return [];
    return this.programMembers.filter(m => m.programId === this.selectedProgram!.id);
  }

  // جلب رئيس البرنامج
  getProgramLeader(): ProgramMember | undefined {
    return this.getSelectedProgramMembers().find(m => m.isLeader);
  }

  // جلب باقي الأعضاء
  getProgramStaff(): ProgramMember[] {
    return this.getSelectedProgramMembers().filter(m => !m.isLeader);
  }

  // جلب عدد أعضاء البرنامج
  getProgramMemberCount(program: Program): number {
    return this.programMembers.filter(m => m.programId === program.id).length;
  }
}
