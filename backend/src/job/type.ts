export enum JobStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  FAILED = 'FAILED',
}

export type UnsplashResponse = {
  [key: string]: any;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
};
