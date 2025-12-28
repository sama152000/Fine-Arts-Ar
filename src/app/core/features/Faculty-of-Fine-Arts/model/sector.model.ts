// Response wrappers
export interface SectorApiResponse {
  success: boolean;
  data: Sector[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface SectorDetailApiResponse {
  success: boolean;
  data: SectorDetail[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface SectorMemberApiResponse {
  success: boolean;
  data: SectorMember[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface SectorPostApiResponse {
  success: boolean;
  data: SectorPost[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface SectorProgramApiResponse {
  success: boolean;
  data: SectorProgram[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

export interface SectorServiceApiResponse {
  success: boolean;
  data: SectorService[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

// Sector basic info
export interface Sector {
  id: string;
  name: string;
  subTitle: string;
  pageId: string;
  pageTitle: string;
  aboutId: string;
  about: string;
  mission: string;
  vision: string;
  goals: SectorGoal[];
  sectorAttachments: SectorAttachment[];
}

export interface SectorGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface SectorAttachment {
  id?: string;
  fileName?: string;
  isPublic?: boolean;
  relativePath?: string;
  folderName?: string;
  url?: string;
}

// Sector detail info
export interface SectorDetail {
  id: string;
  title: string;
  content: string;
  sectorId: string;
  sectorName: string;
}

// Sector members
export interface SectorMember {
  id: string;
  isLeader: boolean;
  sectorId: string;
  sectorName: string;
  memberId: string;
  memberName: string;
}

// Sector posts
export interface SectorPost {
  id: string;
  sectorId: string;
  sectorName: string;
  postId: string;
  postName: string;
}

// Sector programs
export interface SectorProgram {
  id: string;
  name: string;
  sectorId: string;
  sectorName: string;
  programId: string;
  programName: string | null;
}

// Sector services
export interface SectorService {
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
  sectorId: string;
  sectorName: string;
}

export interface SectorTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}
