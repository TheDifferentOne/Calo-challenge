export enum JobStatus {
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
  FAILED = "FAILED",
}

export interface Job {
  id: string;
  status: JobStatus;
  imageUrl?: string;
}
