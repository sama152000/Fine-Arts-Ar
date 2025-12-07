export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedDate?: Date;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  officeHours: string;
  mapUrl?: string;
}