// Response wrapper
export interface UnitApiResponse {
  success: boolean;
  data: Unit[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface UnitDetailApiResponse {
  success: boolean;
  data: UnitDetail[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface UnitMemberApiResponse {
  success: boolean;
  data: UnitMember[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

// Unit basic info
export interface Unit {
  id: string;
  pageId: string;
  unitTitle: string;
  unitTitleEn: string;
  aboutId: string;
  content: string;
  mission: string;
  vision: string;
  history: string;
  goals: UnitGoal[];
  unitAttachments: UnitAttachment[];
}

export interface UnitGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface UnitAttachment {
  id?: string;
  fileName?: string;
  isPublic?: boolean;
  relativePath?: string;
  folderName?: string;
  url?: string;
}

// Unit detail info
export interface UnitDetail {
  id: string;
  title: string;
  content: string;
  unitPlace: string;
  unitId: string;
  unitTitle: string;
  unitAttachments: UnitAttachment[];
}

// Unit members
export interface UnitMember {
  id: string;
  isLeader: boolean;
  unitId: string;
  unitTitle: string;
  memberId: string;
  memberName: string;
}

export interface UnitTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}
