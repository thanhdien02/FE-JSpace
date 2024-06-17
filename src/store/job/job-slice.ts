import { createSlice } from "@reduxjs/toolkit";

interface IFile {
  jobById?: any;
  jobByIdWithCandidate?: any;
  filterJobs: any;
  inputSearchJobs: any;
  companyJobs: any;
  appliedJobs?: any;
  savedJobs?: any;
  relativeJobs?: any;
  homeJobs?: any;
  fitJobs?: any;
  loadingJob?: boolean;
  loadingInputSearchJob?: boolean;
  messageJob?: string;
  paginationFilterJob?: any;
  paginationInputSearchJob?: any;
  paginationSavedJob?: any;
  paginationAppliedJob?: any;
  paginationCompanyJob?: any;
}

const init: IFile = {
  jobById: {},
  jobByIdWithCandidate: {},
  filterJobs: {},
  inputSearchJobs: {},
  companyJobs: {},
  appliedJobs: {},
  savedJobs: {},
  relativeJobs: {},
  homeJobs: {},
  fitJobs: {},
  loadingJob: false,
  loadingInputSearchJob: false,
  messageJob: "",
  paginationFilterJob: {},
  paginationInputSearchJob: {},
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
    jobGetInputSearchJob: () => {},
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
    jobUpdateInputSearchJobRedux: (state: any, action: any) => ({
      ...state,
      inputSearchJobs: action.payload.inputSearchJobs,
    }),
    jobUpdateJobByIdWithCandidateRedux: (state: any, action: any) => ({
      ...state,
      jobByIdWithCandidate: action.payload.jobByIdWithCandidate,
    }),
    jobUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingJob: action.payload.loadingJob,
    }),
    jobUpdateInputSearchLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingInputSearchJob: action.payload.loadingInputSearchJob,
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
    jobUpdateInputSearchPaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationInputSearchJob: action.payload.paginationInputSearchJob,
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
  jobUpdateInputSearchPaginationRedux,
  jobGetInputSearchJob,
  jobUpdateInputSearchJobRedux,
  jobUpdateInputSearchLoadingRedux,
} = jobSlice.actions;
export default jobSlice.reducer;
