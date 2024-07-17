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
export const requestCandidateUnSaveJob = (
  candidate_id: string,
  post_id: string,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.delete(
    `${API}/api/v1/candidates/${candidate_id}/posts/unlike?postId=${post_id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const requestCandidateDeleteAvatar = (
  avatar_id: string,
  candidate_id: string = "",
  accessToken: string
) => {
  if (accessToken === undefined || candidate_id == "") return;
  return axios.delete(
    `${API}/api/v1/candidates/${candidate_id}/delete-avatar?avatarId=${avatar_id}`,
    {
      headers: {
        "Content-Type": "multipart/form-datas",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCandidateDeleteBackground = (
  background_id: string,
  candidate_id: string = "",
  accessToken: string
) => {
  if (accessToken === undefined || candidate_id == "") return;
  return axios.delete(
    `${API}/api/v1/candidates/${candidate_id}/delete-background?backgroundId=${background_id}`,
    {
      headers: {
        "Content-Type": "multipart/form-datas",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const requestCandidateFollowJob = (
  candidate_id: string = "",
  company_id: string = "",
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.post(
    `${API}/api/v1/candidates/companies/follows`,
    {
      companyId: company_id,
      candidateId: candidate_id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCandidateUnFollowJob = (
  candidate_id: string,
  company_id: string,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.delete(
    `${API}/api/v1/candidates/${candidate_id}/companies/unfollow?companyId=${company_id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCandidateSetDefaultResume = (
  candidate_id: string,
  resume_id: string,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.put(
    `${API}/api/v1/candidates/${candidate_id}/resumes/default-resume?resumeId=${resume_id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCandidateUpdatePublicResume = (
  candidate_id: string,
  publicProfile: boolean,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.put(
    `${API}/api/v1/candidates/${candidate_id}/profiles?publicProfile=${publicProfile}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCandidateUpdateStudy = (
  candidateId: any,
  dataUpdateStudy: any,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.put(
    `${API}/api/v1/candidates/${candidateId}/profiles/education-info`,
    dataUpdateStudy,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCandidateSurvey = (
  dataSurvey: any,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.post(`${API}/api/v1/candidates/survey`, dataSurvey, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const requestCandidateGetSurvey = (
  candidate_id: string,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.get(
    `${API}/api/v1/candidates/${candidate_id}/profiles/details`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
