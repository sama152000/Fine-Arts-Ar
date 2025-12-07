export interface EventItem {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  imageUrl: string;
  publishDate: Date;
  eventDate: Date;
  startTime: string;
  endTime?: string;
  location: string;
  author?: string;
  category: 'event';
  readMoreUrl: string;
  registrationUrl?: string;
  featured?: boolean;
  relatedItems?: number[];
}