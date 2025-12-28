// Response wrapper
export interface PostApiResponse {
  success: boolean;
  data: Post[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

// Post basic info
export interface Post {
  id: string;
  title: string;
  urlTitleEn: string;
  content: string;
  status: string;
  publishedDate: string | null;
  featuredImagePath: string;
  pageId: string;
  pageTittle: string;
  createdDate: string;
  postAttachments: PostAttachment[];
  tags: string[];
  postCategories: { categoryName: string }[];
}

export interface PostCategory {
  id: string;
  postId: string;
  categoryId: string;
  categoryName: string; // "الأخبار" | "الاحداث" | "المؤتمرات"
}

export interface PostAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
  postId: string;
}
