import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestApplyJobApply = (
  candidate_id: string,
  job_id: string,
  resume_id: string,
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.post(
    `${API}/api/v1/candidates/posts/apply`,
    {
      candidateId: candidate_id,
      postId: job_id,
      resumeId: resume_id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
