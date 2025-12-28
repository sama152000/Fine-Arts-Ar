// رسالة تواصل من المستخدم
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedDate?: Date;
}

// بيانات التواصل من الـ API
export interface ContactInfo {
  id: string;
  address: string;
  phone: string;
  email: string;
  fax?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedIn?: string;
  youTube?: string;
  whatsApp?: string;
  webSite?: string;
  mapLocation?: string;
}
