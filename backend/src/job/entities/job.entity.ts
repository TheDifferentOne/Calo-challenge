import { JobStatus } from '../type';

export class Job {
  id: string;
  status: JobStatus;
  imageUrl?: string;
}
