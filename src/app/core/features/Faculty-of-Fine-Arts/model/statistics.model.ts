export interface Statistic {
  id: number;
  label: string;
  value: number;
  icon: string;
  suffix?: string;
  prefix?: string;
  description?: string;
}