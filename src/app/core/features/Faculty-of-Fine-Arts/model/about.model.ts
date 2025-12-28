// About Page Response
export interface AboutApiResponse {
  success: boolean;
  data: AboutResponse[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface AboutResponse {
  id: string;
  content: string;
  mission: string;
  vision: string;
  history: string;
  goals: Goal[];
  pageId: string;
  pageType: string;
  pageName: string;
  pageNameEn: string;
}

export interface Goal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

// Dean Speech Response
export interface DeanSpeechResponse {
  success: boolean;
  data: DeanSpeech[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface DeanSpeech {
  id: string;
  memberId: string;
  memberName: string;
  memberPosition: string;
  speech: string;
  deanSpeechAttachments: DeanSpeechAttachment[];
}

export interface DeanSpeechAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
}

// Members Response
export interface MemberResponse {
  success: boolean;
  data: Member[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface Member {
  id: string;
  isPresident: boolean;
  fullName: string;
  position: string;
  specialization: string;
  pageId: string;
  memberType: string;
  memberAttachments: MemberAttachment[];
}

export interface MemberAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
  memberId: string;
}

// Sections for dropdown
export interface AboutSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
  order?: number;
}

export interface AboutFaculty {
  title: string;
  description: string;
  highlights: string[];
  vision?: string;
  mission?: string;
  imageUrl?: string; // هنخليها تجيب صورة العميد من الـ API
  establishedYear?: number;
}
