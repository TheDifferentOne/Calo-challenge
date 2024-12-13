import { Job } from "types";

export const BACKEND_URL = "http://localhost:3000/jobs";

export const API = {
  get: (): Promise<Job[]> => fetch(BACKEND_URL).then((res) => res.json()),
  create: (): Promise<string> =>
    fetch(BACKEND_URL, { method: "POST" }).then((res) => res.text()),
};
