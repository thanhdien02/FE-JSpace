import { createSlice } from "@reduxjs/toolkit";

interface ICandidate {
  candidate: any;
  loading?: boolean;
  messageCandidate?: string;
}

const init: ICandidate = {
  candidate: {},
  loading: false,
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
      loading: action.payload.loading,
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
} = candidateSlice.actions;
export default candidateSlice.reducer;
