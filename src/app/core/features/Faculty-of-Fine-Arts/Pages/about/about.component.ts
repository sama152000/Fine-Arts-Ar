import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutSection, FacultyInfo, AdministrativePosition } from '../../model/about.model';
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
  facultyInfo: FacultyInfo | null = null;
  administrativePositions: AdministrativePosition[] = [];

  constructor(
    private aboutService: AboutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.aboutSections = this.aboutService.getAboutSections();
    this.facultyInfo = this.aboutService.getFacultyInfo();
    this.administrativePositions = this.aboutService.getAdministrativeStructure();
    
    // Check for section ID in route params
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        const section = this.aboutService.getAboutSectionById(id);
        if (section) {
          this.selectSection(section);
        }
      } else if (this.aboutSections.length > 0) {
        this.selectSection(this.aboutSections[0]);
      }
    });
  }

  selectSection(section: AboutSection) {
    this.selectedSection = section;
    
    // Update URL without triggering navigation
    this.router.navigate(['/about', section.id], { replaceUrl: true });
  }

  formatContent(content: string): string[] {
    return content.split('\n\n').filter(paragraph => paragraph.trim() !== '');
  }

  isAdministrativeStructureSection(): boolean {
    return this.selectedSection?.id === 'administrative-structure';
  }
}