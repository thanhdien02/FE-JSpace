import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestFileUploadFile = (
  candidate_id: any,
  accessToken: string,
  dataUploadFile: any
) => {
  if (!accessToken) return;
  return axios.post(
    `${API}/api/v1/candidates/${candidate_id}/create-resume`,
    dataUploadFile,
    {
      headers: {
        "Content-Type": "multipart/form-datas",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
