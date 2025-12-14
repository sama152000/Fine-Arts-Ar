import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterService } from '../../../Services/footer.service';
import { FooterData } from '../../../model/footer.model';

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

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.footerData = this.footerService.getFooterData();
  }
}