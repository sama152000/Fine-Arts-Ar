export interface Unit {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  icon: string;
  establishedYear: number;
  vision: string;
  mission: string;
  objectives: string[];
  headOfUnit: {
    name: string;
    title: string;
    academicRank: string;
    specialization: string;
    email?: string;
    office?: string;
    bio?: string;
  };
  staffMembers: UnitStaffMember[];
  divisions?: string[];
  services?: string[];
  facilities?: string[];
  programs?: string[];
}

export interface UnitStaffMember {
  id: number;
  name: string;
  position: string;
  specialization: string;
  division?: string;
  email?: string;
  office?: string;
}

export interface UnitTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}