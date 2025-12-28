// Response wrapper
export interface ProgramApiResponse {
  success: boolean;
  data: Program[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface ProgramDetailApiResponse {
  success: boolean;
  data: ProgramDetail[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface ProgramMemberApiResponse {
  success: boolean;
  data: ProgramMember[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

// Program basic info
export interface Program {
  id: string;
  pageId: string;
  pageTitle: string;        // من الـ API
  aboutId: string;
  about: string;            // من الـ API
  mission: string;
  vision: string;
  goals: ProgramGoal[];
  programAttachments: ProgramAttachment[];
}

export interface ProgramGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface ProgramAttachment {
  id?: string;
  fileName?: string;
  isPublic?: boolean;
  relativePath?: string;
  folderName?: string;
  url?: string;
}

// Program detail info
export interface ProgramDetail {
  id: string;
  title: string;
  content: string;
  programCategory: string;
  facultyId: string;
  facultyName: string;
  programId: string;
  programName: string;
  programAttachments?: ProgramAttachment[];
}

// Program members
export interface ProgramMember {
  id: string;
  isLeader: boolean;
  programId: string;
  programName: string;
  memberId: string;
  memberName: string;
}

export interface ProgramTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}
