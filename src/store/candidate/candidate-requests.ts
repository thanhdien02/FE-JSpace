import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestCandidateUpdateIdentification = (
  candidate_id: any,
  accessToken: any,
  dataCandidate: any
) => {
  if (!accessToken) return;
  return axios.patch(
    `${API}/api/v1/candidates/${candidate_id}`,
    dataCandidate,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const requestCandidateUpdateBackground = (
  dataCandidateUpdateBackground: any,
  candidate_id: string = "",
  accessToken: string
) => {
  if (accessToken === undefined || candidate_id == "") return;
  return axios.put(
    `${API}/api/v1/candidates/${candidate_id}/update-background`,
    dataCandidateUpdateBackground,
    {
      headers: {
        "Content-Type": "multipart/form-datas",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCandidateUpdateAvatar = (
  dataCandidateUpdateAvatar: any,
  candidate_id: string = "",
  accessToken: string
) => {
  if (accessToken === undefined || candidate_id == "") return;
  return axios.put(
    `${API}/api/v1/candidates/${candidate_id}/update-avatar`,
    dataCandidateUpdateAvatar,
    {
      headers: {
        "Content-Type": "multipart/form-datas",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const requestCandidateSaveJob = (
  candidate_id: string,
  post_id: string,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.post(
    `${API}/api/v1/candidates/${candidate_id}/posts/like?postId=${post_id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
