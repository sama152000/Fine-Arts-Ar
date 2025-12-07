export interface HeroSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  active?: boolean;
}

export interface HeroContent {
  slides: HeroSlide[];
  autoplay?: boolean;
  autoplayInterval?: number;
}