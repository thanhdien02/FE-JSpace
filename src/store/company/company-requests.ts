import axios from "axios";
import { API } from "../../configs/configAPI";
export const requestCompanyGetCompany = (
  candidate_id: string = "",
  companyName: string = "",
  size: string = "1",
  page: string = "9"
) => {
  if (companyName == null) companyName = "";
  return axios.get(
    `${API}/api/v1/companies?name=${companyName}&candidateId=${candidate_id}&page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const requestCompanyGetRelativeCompany = (
  candidate_id: string = "",
  companyName: string = "",
  size: string = "1",
  page: string = "9"
) => {
  if (companyName == null) companyName = "";
  return axios.get(
    `${API}/api/v1/companies?name=${companyName}&candidateId=${candidate_id}&page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const requestCompanyGetFollowedCompany = (
  candidate_id: string = "",
  size: string = "1",
  page: string = "9",
  accessToken: string = ""
) => {
  if (!accessToken) return;
  return axios.get(
    `${API}/api/v1/candidates/${candidate_id}/companies/follows?page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCompanyGetCompanyById = (
  company_id: string = "",
  candidate_id: string = ""
) => {
  if (company_id == "") return;
  return axios.get(
    `${API}/api/v1/companies/${company_id}${
      candidate_id && `?candidateId=${candidate_id}`
    }`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
