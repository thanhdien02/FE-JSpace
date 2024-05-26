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
export const requestFileDeleteFile = (
  candidate_id: any,
  accessToken: string,
  resume_id: any
) => {
  if (!accessToken) return;
  return axios.delete(
    `${API}/api/v1/candidates/${candidate_id}/delete-resume?resumeId=${resume_id}`,
    {
      headers: {
        "Content-Type": "multipart/form-datas",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestFileGetAllFile = (
  candidate_id: any,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.get(`${API}/api/v1/candidates/${candidate_id}/resumes`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
