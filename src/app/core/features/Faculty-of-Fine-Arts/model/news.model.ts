export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  imageUrl: string;
  publishDate: Date;
  author?: string;
  category: 'news';
  readMoreUrl: string;
  featured?: boolean;
  relatedItems?: number[];
}