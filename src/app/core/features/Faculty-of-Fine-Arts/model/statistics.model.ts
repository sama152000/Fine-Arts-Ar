export interface Statistic {
  id: string;
  title: string;
  value: number;       // القيمة العددية
  iconPath: string;    // مثال: "pi pi-user"
  isActive: boolean;
}

export interface StatisticsApiResponse {
  success: boolean;
  data: Statistic[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}
