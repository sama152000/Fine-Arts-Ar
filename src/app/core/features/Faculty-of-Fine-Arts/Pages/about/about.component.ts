import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutSection, AboutResponse, DeanSpeech, Member } from '../../model/about.model';
import { AboutService } from '../../Services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutSections: AboutSection[] = [];
  selectedSection: AboutSection | null = null;

  aboutData: AboutResponse | null = null;
  deanSpeech: DeanSpeech | null = null;
  members: Member[] = [];

  constructor(
    private aboutService: AboutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // تحميل الأقسام من الـ API
    this.aboutService.getMappedSections().subscribe(sections => {
      this.aboutSections = sections;

      // تحديد القسم من الـ route
      this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          const section = this.aboutSections.find(s => s.id === id);
          if (section) {
            this.selectSection(section);
          }
        } else if (this.aboutSections.length > 0) {
          this.selectSection(this.aboutSections[0]);
        }
      });
    });

    // تحميل بيانات عن الكلية
    this.aboutService.getAboutData().subscribe(response => {
      if (response.success && response.data.length > 0) {
        this.aboutData = response.data[0];
      }
    });

    // تحميل كلمة العميد
    this.aboutService.getDeanSpeech().subscribe(res => {
      if (res.success && res.data.length > 0) {
        this.deanSpeech = res.data[0];
      }
    });

    // تحميل الهيكل الإداري
    this.aboutService.getMembers().subscribe(res => {
      if (res.success) {
        this.members = res.data;
      }
    });
  }

  selectSection(section: AboutSection) {
    this.selectedSection = section;
    this.router.navigate(['/about', section.id], { replaceUrl: true });
  }

  formatContent(content: string): string[] {
    if (!content) return [];
    return content.split('\n').filter(paragraph => paragraph.trim() !== '');
  }

  isAdministrativeStructureSection(): boolean {
    return this.selectedSection?.id === 'structure';
  }

  isDeanSpeechSection(): boolean {
    return this.selectedSection?.id === 'dean';
  }
}
