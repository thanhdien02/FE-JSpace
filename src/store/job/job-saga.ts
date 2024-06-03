import { takeLatest } from "redux-saga/effects";

import {
  jobGetFilterJob,
  jobGetHomeJob,
  jobGetJobById,
  jobGetJobByIdWithCandidate,
  jobGetRelativeJob,
  jobGetSavedJob,
} from "./job-slice";
import {
  handleJobGetFilterJob,
  handleJobGetHomeJob,
  handleJobGetJobById,
  handleJobGetJobByIdWithCandidate,
  handleJobGetRelativeJob,
  handleJobGetSavedJob,
} from "./job-handlers";

export default function* authSaga() {
  yield takeLatest(jobGetHomeJob.type, handleJobGetHomeJob);
  yield takeLatest(jobGetRelativeJob.type, handleJobGetRelativeJob);
  yield takeLatest(jobGetFilterJob.type, handleJobGetFilterJob);
  yield takeLatest(jobGetSavedJob.type, handleJobGetSavedJob);
  yield takeLatest(jobGetJobById.type, handleJobGetJobById);
  yield takeLatest(
    jobGetJobByIdWithCandidate.type,
    handleJobGetJobByIdWithCandidate
  );
}
