import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterService } from '../../../Services/footer.service';
import { LogoService } from '../../../Services/logo.service';
import { FooterData } from '../../../model/footer.model';
import { Logo } from '../../../model/logo.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerData: FooterData | null = null;
  currentYear = new Date().getFullYear();
  logo: Logo | undefined;

  constructor(private footerService: FooterService, private logoService: LogoService) {}

  ngOnInit() {
    this.footerData = this.footerService.getFooterData();
    // Fetch logo
    this.logoService.getLogos().subscribe(response => {
      if (response.success && response.data.length > 0) {
        this.logo = response.data.find(l => l.isPublic) || response.data[0];
      }
    });
  }
}