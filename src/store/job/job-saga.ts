import { takeLatest } from "redux-saga/effects";

import {
  jobGetAppliedJob,
  jobGetCompanyJob,
  jobGetFilterJob,
  jobGetHomeJob,
  jobGetJobById,
  jobGetJobByIdWithCandidate,
  jobGetRelativeJob,
  jobGetSavedJob,
} from "./job-slice";
import {
  handleJobGetAppliedJob,
  handleJobGetCompanyJob,
  handleJobGetFilterJob,
  handleJobGetHomeJob,
  handleJobGetJobById,
  handleJobGetJobByIdWithCandidate,
  handleJobGetRelativeJob,
  handleJobGetSavedJob,
} from "./job-handlers";

export default function* authSaga() {
  yield takeLatest(jobGetHomeJob.type, handleJobGetHomeJob);
  yield takeLatest(jobGetCompanyJob.type, handleJobGetCompanyJob);
  yield takeLatest(jobGetRelativeJob.type, handleJobGetRelativeJob);
  yield takeLatest(jobGetFilterJob.type, handleJobGetFilterJob);
  yield takeLatest(jobGetSavedJob.type, handleJobGetSavedJob);
  yield takeLatest(jobGetAppliedJob.type, handleJobGetAppliedJob);
  yield takeLatest(jobGetJobById.type, handleJobGetJobById);
  yield takeLatest(
    jobGetJobByIdWithCandidate.type,
    handleJobGetJobByIdWithCandidate
  );
}
