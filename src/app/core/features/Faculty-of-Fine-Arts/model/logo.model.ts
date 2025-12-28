export interface Logo {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
}

export interface LogoApiResponse {
  success: boolean;
  data: Logo[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}
