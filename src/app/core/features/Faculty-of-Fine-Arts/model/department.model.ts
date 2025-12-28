// Response wrappers
export interface DepartmentApiResponse {
  success: boolean;
  data: Department[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface DepartmentDetailApiResponse {
  success: boolean;
  data: DepartmentDetail[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface DepartmentMemberApiResponse {
  success: boolean;
  data: DepartmentMember[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface DepartmentProgramApiResponse {
  success: boolean;
  data: DepartmentProgram[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface DepartmentServiceApiResponse {
  success: boolean;
  data: DepartmentService[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

// Department basic info
export interface Department {
  id: string;
  name: string;
  subTitle: string;
  pageId: string;
  pageTitle: string;
  aboutId: string;
  about: string;
  mission: string | null;
  vision: string | null;
  goals: DepartmentGoal[];
  departmentAttachments: DepartmentAttachment[];
}

export interface DepartmentGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface DepartmentAttachment {
  id?: string;
  fileName?: string;
  isPublic?: boolean;
  relativePath?: string;
  folderName?: string;
  url?: string;
}

// Department detail info
export interface DepartmentDetail {
  id: string;
  title: string;
  content: string;
  departmentId: string;
  departmentName: string;
}

// Department members
export interface DepartmentMember {
  id: string;
  isLeader: boolean;
  departmentId: string;
  departmentName: string;
  memberId: string;
  memberName: string;
}

// Department programs
export interface DepartmentProgram {
  id: string;
  name: string;
  departmentId: string;
  departmentName: string;
  programId: string;
  programName: string;
}

// Department services
export interface DepartmentService {
  id: string;
  name: string;
  details: string;
  duration: string;
  applicationUrl: string;
  downloadUrl: string;
  isOnline: boolean;
  category: string;
  fees: number;
  contactPerson: string;
  contactPhone: string;
  departmentId: string;
  departmentName: string;
}

export interface DepartmentTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}
