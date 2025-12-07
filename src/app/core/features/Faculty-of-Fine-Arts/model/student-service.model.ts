export interface StudentService {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  icon: string;
  establishedYear: number;
  vision: string;
  mission: string;
  objectives: string[];
  headOfService: {
    name: string;
    title: string;
    position: string;
    specialization: string;
    email?: string;
    office?: string;
    bio?: string;
  };
  staffMembers: ServiceStaffMember[];
  divisions?: string[];
  services?: string[];
  procedures?: string[];
  requirements?: string[];
  workingHours?: string;
  location?: string;
}

export interface ServiceStaffMember {
  id: number;
  name: string;
  position: string;
  specialization: string;
  division?: string;
  email?: string;
  office?: string;
}

export interface ServiceTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}