import axios from "axios";
import { API } from "../../configs/configAPI";
export const requestCommentGetComment = (
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
