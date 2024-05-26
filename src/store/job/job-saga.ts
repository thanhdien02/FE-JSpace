import { takeLatest } from "redux-saga/effects";

import { jobGetHomeJob } from "./job-slice";
import { handleJobGetHomeJob } from "./job-handlers";

export default function* authSaga() {
  yield takeLatest(jobGetHomeJob.type, handleJobGetHomeJob);
}
