export interface WorkLog {
  id:string;
  date: string;
  statusText: string;
  comment: string;
  hourLog: HourlyLog[];
}

export interface HourlyLog {
  id: string;
  date: string;
  timing?: string;
  comment: string;
  isImportant: boolean;
  isUrgent: boolean;
  isQuick: boolean;
}


