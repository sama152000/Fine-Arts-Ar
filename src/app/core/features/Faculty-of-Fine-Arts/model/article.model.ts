export interface ArticleItem {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  imageUrl: string;
  publishDate: Date;
  author?: string;
  category: 'article';
  readMoreUrl: string;
  featured?: boolean;
  relatedItems?: number[];
}