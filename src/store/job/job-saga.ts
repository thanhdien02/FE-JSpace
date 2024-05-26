import { takeLatest } from "redux-saga/effects";

import { jobGetHomeJob, jobGetSavedJob } from "./job-slice";
import { handleJobGetHomeJob, handleJobGetSavedJob } from "./job-handlers";

export default function* authSaga() {
  yield takeLatest(jobGetHomeJob.type, handleJobGetHomeJob);
  yield takeLatest(jobGetSavedJob.type, handleJobGetSavedJob);
}
