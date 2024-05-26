import authSaga from "./auth/auth-saga";
import candidateSaga from "./candidate/candidate-saga";
import fileSaga from "./file/file-saga";
import jobSaga from "./job/job-saga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga(): any {
  yield all([fork(authSaga)]);
  yield all([fork(candidateSaga)]);
  yield all([fork(fileSaga)]);
  yield all([fork(jobSaga)]);
}
