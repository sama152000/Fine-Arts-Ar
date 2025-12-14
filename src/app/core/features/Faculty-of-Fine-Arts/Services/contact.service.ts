import { Injectable } from '@angular/core';
import { ContactMessage, ContactInfo } from '../model/contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactInfo: ContactInfo = {
    phone: '+20 95 123 4567',
    email: 'contact@fineartslu.edu.eg',
    address: 'كلية الفنون الجميلة، جامعة الأقصر، الأقصر، مصر',
    officeHours: 'الأحد - الخميس: 8:00 صباحًا - 4:00 مساءً',
    mapUrl: 'https://maps.google.com'
  };

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }

  submitContactMessage(message: ContactMessage): boolean {
    // محاكاة إرسال الرسالة - في التطبيق الحقيقي سيتم إرسالها إلى الخادم
    console.log('تم إرسال رسالة التواصل:', message);
    return true;
  }
}
