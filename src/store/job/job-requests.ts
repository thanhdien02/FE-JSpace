import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestJobGetJobById = (job_id: string, accessToken: string) => {
  if (!accessToken) return;
  return axios.get(`${API}/api/v1/posts/${job_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const requestJobGetJobByIdWithCandidate = (
  candidate_id: string,
  job_id: string,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.get(`${API}/api/v1/candidates/${candidate_id}/posts/${job_id}`, {
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
export const requestJobGetRelativeJob = (
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
export const requestJobGetSavedJob = (
  candidate_id: string,
  page: string = "1",
  size: string = "9",
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.get(
    `${API}/api/v1/candidates/${candidate_id}/posts/like?page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
