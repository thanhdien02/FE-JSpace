import { createSlice } from "@reduxjs/toolkit";

interface ICandidate {
  candidate: any;
  loadingCandidate?: boolean;
  messageCandidate?: string;
}

const init: ICandidate = {
  candidate: {},
  loadingCandidate: false,
  messageCandidate: "",
};
const candidateSlice: any = createSlice({
  name: "candidate",
  initialState: init,
  reducers: {
    candidateUpdateCandidate: (state: any) => ({
      ...state,
    }),
    candidateUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingCandidate: action.payload.loadingCandidate,
    }),
    candidateUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageCandidate: action.payload.messageCandidate,
    }),
    candidateUpdateBackground: () => {},
    candidateUpdateAvatar: () => {},
    candidateSaveJob: () => {},
    candidateUnSaveJob: () => {},
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
} = candidateSlice.actions;
export default candidateSlice.reducer;
