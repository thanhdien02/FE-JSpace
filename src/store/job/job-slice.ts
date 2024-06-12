import { createSlice } from "@reduxjs/toolkit";

interface IFile {
  jobById?: any;
  jobByIdWithCandidate?: any;
  filterJobs: any;
  companyJobs: any;
  appliedJobs?: any;
  savedJobs?: any;
  relativeJobs?: any;
  homeJobs?: any;
  fitJobs?: any;
  loadingJob?: boolean;
  messageJob?: string;
  paginationFilterJob?: any;
  paginationSavedJob?: any;
  paginationAppliedJob?: any;
  paginationCompanyJob?: any;
}

const init: IFile = {
  jobById: {},
  jobByIdWithCandidate: {},
  filterJobs: {},
  companyJobs: {},
  appliedJobs: {},
  savedJobs: {},
  relativeJobs: {},
  homeJobs: {},
  fitJobs: {},
  loadingJob: false,
  messageJob: "",
  paginationFilterJob: {},
  paginationSavedJob: {},
  paginationAppliedJob: {},
  paginationCompanyJob: {},
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
    jobGetAppliedJob: () => {},
    jobGetFilterJob: () => {},
    jobGetCompanyJob: () => {},
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
    jobUpdateCompanyJobRedux: (state: any, action: any) => ({
      ...state,
      companyJobs: action.payload.companyJobs,
    }),
    jobUpdateSavedJobRedux: (state: any, action: any) => ({
      ...state,
      savedJobs: action.payload.savedJobs,
    }),
    jobUpdateAppliedJobRedux: (state: any, action: any) => ({
      ...state,
      appliedJobs: action.payload.appliedJobs,
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
    jobUpdateAppliedPaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationAppliedJob: action.payload.paginationAppliedJob,
    }),
    jobUpdateCompanyPaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationCompanyJob: action.payload.paginationCompanyJob,
    }),
    jobUpdateFilterPaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationFilterJob: action.payload.paginationFilterJob,
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
  jobGetAppliedJob,
  jobUpdateAppliedJobRedux,
  jobUpdateAppliedPaginationRedux,
  jobGetCompanyJob,
  jobUpdateCompanyJobRedux,
  jobUpdateCompanyPaginationRedux,
  jobUpdateFilterPaginationRedux,
} = jobSlice.actions;
export default jobSlice.reducer;
