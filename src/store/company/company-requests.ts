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
  companyId: string = "",
  accessToken: string
) => {
  if (companyId == "") return;
  return axios.get(`${API}/api/v1/companies/${companyId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
