import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../Services/navigation.service';
import { LogoService } from '../../../Services/logo.service';
import { ContactService } from '../../../Services/contact.service';
import { MenuItem, SocialLink, LanguageOption, DropdownItem } from '../../../model/navigation.model';
import { Logo } from '../../../model/logo.model';
import { ContactInfo } from '../../../model/contact-message.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [];
  socialLinks: SocialLink[] = [];
  languageOptions: LanguageOption[] = [];
  currentLanguage: LanguageOption = { code: 'en', label: 'English' };
  isMobileMenuOpen = false;
  isTopBarOpen = false;
  logo: Logo | undefined;
  contactInfo: ContactInfo | undefined;

  constructor(private navigationService: NavigationService, private logoService: LogoService, private contactService: ContactService) {}

  ngOnInit() {
    this.menuItems = this.navigationService.getMainMenuItems();

    // Fetch units dropdown items asynchronously
    this.navigationService.getUnitDropdownItems().subscribe(units => {
      const unitsMenuItem = this.menuItems.find(item => item.id === 'units');
      if (unitsMenuItem) {
        unitsMenuItem.dropdownItems = units;
      }
    });

    // Fetch centers dropdown items asynchronously
    this.navigationService.getCenterDropdownItems().subscribe(centers => {
      const centersMenuItem = this.menuItems.find(item => item.id === 'centers');
      if (centersMenuItem) {
        centersMenuItem.dropdownItems = centers;
      }
    });

    // Fetch departments dropdown items asynchronously
    this.navigationService.getDepartmentsDropdownItems().subscribe(departments => {
      const departmentsMenuItem = this.menuItems.find(item => item.id === 'departments');
      if (departmentsMenuItem) {
        departmentsMenuItem.dropdownItems = departments;
      }
    });

    // Fetch programs dropdown items asynchronously
    this.navigationService.getProgramDropdownItems().subscribe(programs => {
      const programsMenuItem = this.menuItems.find(item => item.id === 'programs');
      if (programsMenuItem) {
        programsMenuItem.dropdownItems = programs;
      }
    });

    // Fetch sectors dropdown items asynchronously
    this.navigationService.getSectorDropdownItems().subscribe(sectors => {
      const sectorsMenuItem = this.menuItems.find(item => item.id === 'sectors');
      if (sectorsMenuItem) {
        sectorsMenuItem.dropdownItems = sectors;
      }
    });

    // Fetch student services dropdown items asynchronously
    this.navigationService.getservicesItems().subscribe(services => {
      const servicesMenuItem = this.menuItems.find(item => item.id === 'student-services');
      if (servicesMenuItem) {
        servicesMenuItem.dropdownItems = services;
      }
    });
    // Fetch logo
    this.logoService.getLogos().subscribe(response => {
      if (response.success && response.data.length > 0) {
        this.logo = response.data.find(l => l.isPublic) || response.data[0];
      }
    });
    // Fetch contact info
    this.contactService.getContactInfo().subscribe(response => {
      if (response.success && response.data.length > 0) {
        this.contactInfo = response.data[0];
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleTopBar() {
    this.isTopBarOpen = !this.isTopBarOpen;
  }

  switchLanguage(language: LanguageOption) {
    this.currentLanguage = language;
    // Implementation for language switching would go here
  }
}