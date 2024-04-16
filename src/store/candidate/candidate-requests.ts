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
