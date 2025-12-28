// Response wrapper
export interface CenterApiResponse {
  success: boolean;
  data: Center[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface CenterDetailApiResponse {
  success: boolean;
  data: CenterDetail[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface CenterMemberApiResponse {
  success: boolean;
  data: CenterMember[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

// Center basic info
export interface Center {
  id: string;
  pageId: string;
  centerName: string;       // من الـ API
  centerNameEn: string;     // من الـ API
  subTitle: string;
  place: string;
  aboutId: string;
  about: string;            // من الـ API
  mission: string;
  vision: string;
  goals: CenterGoal[];
  centerAttachments: CenterAttachment[];
}

export interface CenterGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface CenterAttachment {
  id?: string;
  fileName?: string;
  isPublic?: boolean;
  relativePath?: string;
  folderName?: string;
  url?: string;
}

// Center detail info
export interface CenterDetail {
  id: string;
  title: string;
  description: string;
  content: string;
  centerId: string;
  center: string;
}

export interface CenterMember {
  id: string;
  isLeader: boolean;
  centerId: string;
  centerName: string;
  memberId: string;
  memberName: string;
}

export interface CenterTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}
