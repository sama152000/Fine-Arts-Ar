export interface Department {
  id: number;
  name: string;
  description: string;
  vision: string;
  mission: string;
  objectives: string[];
  imageUrl: string;
  icon: string;
  studentCount?: number;
  programsOffered: string[];
  divisions?: string[];
  headOfDepartment: DepartmentHead;
  staffMembers: StaffMember[];
  establishedYear?: number;
  detailsUrl: string;
}

export interface DepartmentHead {
  name: string;
  title: string;
  academicRank: string;
  specialization: string;
  email?: string;
  office?: string;
  imageUrl?: string;
  bio?: string;
}

export interface StaffMember {
  id: number;
  name: string;
  specialization: string;
  academicRank: string;
  email?: string;
  office?: string;
  imageUrl?: string;
  division?: string;
}

export interface DepartmentTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}