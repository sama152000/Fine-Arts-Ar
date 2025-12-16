import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../Services/contact.service';
import { ContactMessage, ContactInfo } from '../../model/contact-message.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo | null = null;
  contactMessage: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactInfo = this.contactService.getContactInfo();
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.submitError = false;
      
      // Simulate API call delay
      setTimeout(() => {
        const success = this.contactService.submitContactMessage(this.contactMessage);
        this.isSubmitting = false;
        
        if (success) {
          this.submitSuccess = true;
          this.resetForm();
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        } else {
          this.submitError = true;
        }
      }, 1500);
    }
  }

  resetForm() {
    this.contactMessage = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  isFormValid(): boolean {
    return this.contactMessage.name.trim() !== '' &&
           this.contactMessage.email.trim() !== '' &&
           this.contactMessage.subject.trim() !== '' &&
           this.contactMessage.message.trim() !== '' &&
           this.isValidEmail(this.contactMessage.email);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}