import { createSlice } from "@reduxjs/toolkit";

interface IFile {
  jobById?: any;
  jobByIdWithCandidate?: any;
  filterJobs: any;
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
  filterJobs: {},
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
    jobGetFilterJob: () => {},
    jobPostJob: () => {},
    jobUpdateJobByIdRedux: (state: any, action: any) => ({
      ...state,
      jobById: action.payload.jobById,
    }),
    jobUpdateFilterJobRedux: (state: any, action: any) => ({
      ...state,
      filterJobs: action.payload.filterJobs,
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
  jobGetFilterJob,
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
  jobUpdateFilterJobRedux,
} = jobSlice.actions;
export default jobSlice.reducer;
