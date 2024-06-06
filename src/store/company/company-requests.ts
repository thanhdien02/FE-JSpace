import axios from "axios";
import { API } from "../../configs/configAPI";
export const requestCompanyGetCompany = (
  companyName: string = "",
  size: string = "1",
  page: string = "9"
) => {
  if (companyName == null) companyName = "";
  return axios.get(
    `${API}/api/v1/companies?name=${companyName}&page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
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
