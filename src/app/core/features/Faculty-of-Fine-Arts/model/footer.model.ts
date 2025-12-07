export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export interface FooterData {
  logo: string;
  description: string;
  sections: FooterSection[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  copyrightText: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}