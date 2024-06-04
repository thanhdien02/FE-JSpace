import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestJobGetJobById = (job_id: string) => {
  return axios.get(`${API}/api/v1/posts/${job_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const requestJobGetJobByIdWithCandidate = (
  candidate_id: string,
  job_id: string
) => {
  if (candidate_id == null || candidate_id == undefined) candidate_id = "";
  return axios.get(
    `${API}/api/v1/posts/${job_id}?candidateId=${candidate_id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const requestJobGetHomeJob = (
  candidate_id: string = "",
  page: string = "1",
  size: string = "9"
) => {
  if (candidate_id == null || candidate_id == undefined) candidate_id = "";
  return axios.get(
    `${API}/api/v1/posts?${
      candidate_id && `candidateId=${candidate_id}&`
    }page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const requestJobGetRelativeJob = (
  candidate_id: string,
  page: string = "1",
  size: string = "12"
) => {
  if (candidate_id == null || candidate_id == undefined) candidate_id = "";
  return axios.get(
    `${API}/api/v1/posts?${
      candidate_id && `candidateId=${candidate_id}&`
    }page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const requestJobGetFilterJob = (
  candidate_id: string,
  title: string = "",
  gender: string = "",
  location: string = "",
  experience: string = "",
  jobType: string = "",
  rank: string = "",
  minPay: string = "",
  maxPay: string = "",
  page: string = "1",
  size: string = "12"
) => {
  console.log("🚀 ~ gender:", gender + jobType);
  if (candidate_id == null || candidate_id == undefined) candidate_id = "";
  if (title == null || title == undefined) title = "";
  if (location == null || location == undefined) location = "";
  if (experience == null || experience == undefined) experience = "";
  if (rank == null || rank == undefined) rank = "";
  if (minPay == null || minPay == undefined) minPay = "";
  if (maxPay == null || maxPay == undefined) maxPay = "";
  return axios.get(
    `${API}/api/v1/posts?${
      candidate_id && `candidateId=${candidate_id}&`
    }page=${page}&size=${size}${title && `&title=${title}`}${
      location && `&location=${location}`
    }${experience && `&experience=${experience}`}${rank && `&rank=${rank}`}${
      minPay && `&minPay=${minPay}`
    }${maxPay && `&maxPay=${maxPay}`}`,
    {
      headers: {
        "Content-Type": "application/json",
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
export const requestJobGetAppliedJob = (
  candidate_id: string,
  page: string = "1",
  size: string = "9",
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.get(
    `${API}/api/v1/candidates/${candidate_id}/posts/applied?page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
