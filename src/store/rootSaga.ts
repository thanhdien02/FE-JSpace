import authSaga from "./auth/auth-saga";
import candidateSaga from "./candidate/candidate-saga";
import fileSaga from "./file/file-saga";
import jobSaga from "./job/job-saga";
import applySaga from "./apply/apply-saga";
import commonSaga from "./common/common-saga";
import companySaga from "./company/company-saga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga(): any {
  yield all([fork(authSaga)]);
  yield all([fork(candidateSaga)]);
  yield all([fork(fileSaga)]);
  yield all([fork(jobSaga)]);
  yield all([fork(applySaga)]);
  yield all([fork(companySaga)]);
  yield all([fork(commonSaga)]);
}
