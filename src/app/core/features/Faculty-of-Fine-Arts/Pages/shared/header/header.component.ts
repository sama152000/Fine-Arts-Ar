import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../Services/navigation.service';
import { MenuItem, SocialLink, LanguageOption } from '../../../model/navigation.model';

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

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.menuItems = this.navigationService.getMainMenuItems();
  
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