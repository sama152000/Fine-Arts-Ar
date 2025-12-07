export interface AnnouncementItem {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  imageUrl: string;
  publishDate: Date;
  author?: string;
  category: 'announcement';
  readMoreUrl: string;
  featured?: boolean;
  relatedItems?: number[];
}