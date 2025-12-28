import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactService } from '../../Services/contact.service';
import { ContactInfo } from '../../model/contact-message.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo | null = null;

  constructor(private contactService: ContactService, private sanitizer: DomSanitizer) {}

  sanitizeUrl(url: string | undefined): SafeResourceUrl | undefined {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : undefined;
  }

  ngOnInit() {
    this.contactService.getContactInfo().subscribe(res => {
      if (res.success && res.data.length > 0) {
        this.contactInfo = res.data[0]; // أول عنصر من الـ API
      }
    });
  }
}
