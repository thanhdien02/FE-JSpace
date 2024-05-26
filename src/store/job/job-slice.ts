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
  paginationSavedJob?: any;
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
  paginationSavedJob: {},
};
const jobSlice: any = createSlice({
  name: "job",
  initialState: init,
  reducers: {
    jobGetJobById: () => {},
    jobUpdateJob: () => {},
    jobGetHomeJob: () => {},
    jobGetSavedJob: () => {},
    jobGetJobFilter: () => {},
    jobPostJob: () => {},
    jobUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingJob: action.payload.loadingJob,
    }),
    jobUpdateHomeJobRedux: (state: any, action: any) => ({
      ...state,
      homeJobs: action.payload.homeJobs,
    }),
    jobUpdateSavedJobRedux: (state: any, action: any) => ({
      ...state,
      savedJobs: action.payload.savedJobs,
    }),
    jobUpdateMessageRedux: (state: any, action: any) => ({
      ...state,
      messageJob: action.payload.messageJob,
    }),
    jobUpdateSavedPaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationSavedJob: action.payload.paginationSavedJob,
    }),
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
  jobGetSavedJob,
  jobUpdateSavedJobRedux,
  jobUpdateSavedPaginationRedux,
} = jobSlice.actions;
export default jobSlice.reducer;
