import { takeLatest } from "redux-saga/effects";
import { applyJobApply } from "./apply-slice";
import { handleApplyJobApply } from "./apply-handlers";

export default function* authSaga() {
  yield takeLatest(applyJobApply.type, handleApplyJobApply);
}
