import { createSlice } from "@reduxjs/toolkit";

interface ICandidate {
  skillCandidatePickSuggest: any;
  candidate: any;
  loadingCandidate?: boolean;
  messageCandidate?: string;
}

const init: ICandidate = {
  skillCandidatePickSuggest: {},
  candidate: {},
  loadingCandidate: false,
  messageCandidate: "",
};
const candidateSlice: any = createSlice({
  name: "candidate",
  initialState: init,
  reducers: {
    candidateUpdateBackground: () => {},
    candidateUpdateAvatar: () => {},
    candidatePickSkillSuggestJob: () => {},
    candidateGetSkillSuggestJob: () => {},
    candidateSaveJob: () => {},
    candidateUnSaveJob: () => {},
    candidateFollowJob: () => {},
    candidateUnFollowJob: () => {},
    candidateDeleteBackgroundCandidate: () => {},
    candidateDeleteAvatarCandidate: () => {},
    candidateSetDefaultResume: () => {},
    candidateUpdatePublicResume: () => {},
    candidateUpdateCandidate: (state: any) => ({
      ...state,
    }),
    candidateUpdateGetSkillCandidatePickSuggestRedux: (
      state: any,
      action: any
    ) => ({
      ...state,
      skillCandidatePickSuggest: action.payload.skillCandidatePickSuggest,
    }),
    candidateUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingCandidate: action.payload.loadingCandidate,
    }),
    candidateUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageCandidate: action.payload.messageCandidate,
    }),
  },
});
export const {
  candidateUpdateCandidate,
  candidateUpdateLoadingRedux,
  candidateUpdateMessageRedux,
  candidateUpdateBackground,
  candidateUpdateAvatar,
  candidateSaveJob,
  candidateUnSaveJob,
  candidateDeleteBackgroundCandidate,
  candidateDeleteAvatarCandidate,
  candidateFollowJob,
  candidateUnFollowJob,
  candidateSetDefaultResume,
  candidateUpdatePublicResume,
  candidatePickSkillSuggestJob,
  candidateGetSkillSuggestJob,
  candidateUpdateGetSkillCandidatePickSuggestRedux,
} = candidateSlice.actions;
export default candidateSlice.reducer;
