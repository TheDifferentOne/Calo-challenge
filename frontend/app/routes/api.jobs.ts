import { API } from "~/api/endpoints";

export const loader = async () => {
  try {
    return await API.get();
  } catch {
    return [];
  }
};
