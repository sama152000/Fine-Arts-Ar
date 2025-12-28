export interface StudentService {
  id: string;
  title: string;
  description: string;
  iconPath: string;   // مثال: "pi pi-book"
  isActive: boolean;
}

export interface ServiceTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}

export interface StudentServiceApiResponse {
  success: boolean;
  data: StudentService[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}
