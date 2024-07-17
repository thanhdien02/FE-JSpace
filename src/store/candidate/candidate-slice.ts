import { createSlice } from "@reduxjs/toolkit";

interface ICandidate {
  informationSurvey: any;
  candidate: any;
  loadingCandidate?: boolean;
  messageCandidate?: string;
}

const init: ICandidate = {
  informationSurvey: {},
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
    candidateUpdateStudy: () => {},
    candidateUpdateExperience: () => {},
    candidateSurvey: () => {},
    candidateGetSurvey: () => {},
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
    candidateUpdateInformationSurveyRedux: (state: any, action: any) => ({
      ...state,
      informationSurvey: action.payload.informationSurvey,
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
  candidateSurvey,
  candidateGetSurvey,
  candidateUpdateInformationSurveyRedux,
  candidateUpdateStudy,
  candidateUpdateExperience,
} = candidateSlice.actions;
export default candidateSlice.reducer;
