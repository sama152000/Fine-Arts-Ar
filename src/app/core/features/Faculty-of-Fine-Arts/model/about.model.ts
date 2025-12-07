export interface AboutFaculty {
  title: string;
  description: string;
  highlights: string[];
  vision?: string;
  mission?: string;
  imageUrl: string;
  establishedYear?: number;
}
export interface AboutSection {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  order: number;
  icon: string;
}

export interface FacultyInfo {
  vision: string;
  mission: string;
  objectives: string[];
  history: string;
  establishedYear: number;
  deansWord: string;
  strategicPlan: string;
  administrativeStructure: AdministrativePosition[];
}

export interface AdministrativePosition {
  id: number;
  title: string;
  name: string;
  academicRank: string;
  email?: string;
  office?: string;
  imageUrl?: string;
  responsibilities?: string[];
}