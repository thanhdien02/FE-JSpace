import { createSlice } from "@reduxjs/toolkit";

interface IFile {
  resultJobs: any;
  appliedJobs?: any;
  savedJobs?: any;
  relativeJobs?: any;
  homeJobs?: any;
  fitJobs?: any;
  loadingJob?: boolean;
  messageJob?: string;
}

const init: IFile = {
  resultJobs: {},
  appliedJobs: {},
  savedJobs: {},
  relativeJobs: {},
  homeJobs: {},
  fitJobs: {},
  loadingJob: false,
  messageJob: "",
};
const jobSlice: any = createSlice({
  name: "job",
  initialState: init,
  reducers: {
    jobGetJobById: () => {},
    jobUpdateJob: () => {},
    jobGetHomeJob: () => {},
    jobUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingJob: action.payload.loadingJob,
    }),
    jobUpdateHomeJobRedux: (state: any, action: any) => ({
      ...state,
      homeJobs: action.payload.homeJobs,
    }),
    jobUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageJob: action.payload.messageJob,
    }),
    jobGetJobFilter: () => {},
    jobPostJob: () => {},
  },
});
export const {
  jobGetJobById,
  jobUpdateLoadingRedux,
  jobUpdateMessageRedux,
  jobGetJobFilter,
  jobUpdateJob,
  jobPostJob,
  jobGetHomeJob,
  jobUpdateHomeJobRedux,
} = jobSlice.actions;
export default jobSlice.reducer;
