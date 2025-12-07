export interface Sector {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  icon: string;
  establishedYear: number;
  vision: string;
  mission: string;
  objectives: string[];
  headOfSector: {
    name: string;
    title: string;
    academicRank: string;
    specialization: string;
    email?: string;
    office?: string;
    bio?: string;
  };
  staffMembers: StaffMember[];
  divisions?: string[];
  services?: string[];
  activities?: string[];
}

export interface StaffMember {
  id: number;
  name: string;
  academicRank: string;
  specialization: string;
  division?: string;
  email?: string;
  office?: string;
}

export interface SectorTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}