import * as fs from 'fs';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

import { Job } from './entities/job.entity';
import { JobStatus, UnsplashResponse } from './type';

@Injectable()
export class JobService {
  jobs: Job[] = [];
  DATA_FILE_PATH = join(process.cwd(), 'data/jobs.json');
  UNSPLASH_FOOD_URL = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=food`;

  constructor() {
    //Load data initially
    if (fs.existsSync(this.DATA_FILE_PATH)) {
      this.jobs = JSON.parse(fs.readFileSync(this.DATA_FILE_PATH, 'utf-8'));
    }
  }

  private saveJobs() {
    fs.writeFileSync(this.DATA_FILE_PATH, JSON.stringify(this.jobs, null, 2));
  }

  private executeRandomJob(jobId: string) {
    const MAX_DURATION_IN_SECONDS = 5 * 60;
    const randomDelay = Math.floor(Math.random() * MAX_DURATION_IN_SECONDS) + 5;
    const jobIndex = this.jobs.findIndex(({ id }) => id === jobId);

    setTimeout(async () => {
      try {
        const response = await fetch(this.UNSPLASH_FOOD_URL);
        const imageUrl = ((await response.json()) as UnsplashResponse).urls
          .small;

        this.jobs[jobIndex].imageUrl = imageUrl;
        this.jobs[jobIndex].status = JobStatus.RESOLVED;
      } catch (error) {
        console.log(error);
        this.jobs[jobIndex].status = JobStatus.FAILED;
      } finally {
        this.saveJobs();
      }
    }, randomDelay * 1000);
  }

  create() {
    const job: Job = {
      id: randomUUID().toString(),
      status: JobStatus.PENDING,
    };

    this.jobs.push(job);
    this.saveJobs();

    this.executeRandomJob(job.id);

    return job.id;
  }

  findAll() {
    return this.jobs;
  }

  findOne(jobId: string) {
    return this.jobs.find(({ id }) => id === jobId);
  }
}
