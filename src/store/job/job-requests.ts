import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestJobGetById = (job_id: any, accessToken: string) => {
  if (!accessToken) return;
  return axios.get(`${API}/api/v1/candidates/${job_id}/resumes?size=100`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const requestJobGetHomeJob = (
  candidate_id: string,
  page: string = "1",
  size: string = "9",
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.get(
    `${API}/api/v1/candidates/${candidate_id}/posts?page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
