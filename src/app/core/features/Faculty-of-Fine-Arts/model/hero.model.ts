export interface HeroAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
  heroSectionId: string;
}

export interface HeroSection {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  isActive: boolean;
  heroAttachments: HeroAttachment[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;       // من الـ API: subTitle
  description: string;
  imageUrl: string;       // نجيبها من heroAttachments[0].url
  isActive: boolean;
  ctaText?: string;       // لو عايز تضيف زر CTA
  ctaUrl?: string;
}

export interface HeroContent {
  slides: HeroSlide[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export interface HeroApiResponse {
  success: boolean;
  data: HeroSection[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}
