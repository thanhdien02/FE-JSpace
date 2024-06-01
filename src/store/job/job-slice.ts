import { createSlice } from "@reduxjs/toolkit";

interface IFile {
  jobById?: any;
  jobByIdWithCandidate?: any;
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
  jobById: {},
  jobByIdWithCandidate: {},
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
    jobGetJobByIdWithCandidate: () => {},
    jobUpdateJob: () => {},
    jobGetHomeJob: () => {},
    jobGetRelativeJob: () => {},
    jobGetSavedJob: () => {},
    jobGetJobFilter: () => {},
    jobPostJob: () => {},
    jobUpdateJobByIdRedux: (state: any, action: any) => ({
      ...state,
      jobById: action.payload.jobById,
    }),
    jobUpdateJobByIdWithCandidateRedux: (state: any, action: any) => ({
      ...state,
      jobByIdWithCandidate: action.payload.jobByIdWithCandidate,
    }),
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
    jobUpdateRelativeJobRedux: (state: any, action: any) => ({
      ...state,
      relativeJobs: action.payload.relativeJobs,
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
  jobUpdateJobByIdRedux,
  jobGetJobByIdWithCandidate,
  jobUpdateJobByIdWithCandidateRedux,
  jobGetRelativeJob,
  jobUpdateRelativeJobRedux,
} = jobSlice.actions;
export default jobSlice.reducer;
