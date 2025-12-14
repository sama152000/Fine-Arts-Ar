import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { AboutFaculty } from '../../../model/about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData: AboutFaculty | null = null;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutData = this.aboutService.getAboutFaculty();
  }
}