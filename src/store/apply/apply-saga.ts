import { takeLatest } from "redux-saga/effects";
import { applyJobApply, applyJobApplyWithUploadCV } from "./apply-slice";
import {
  handleApplyJobApply,
  handleApplyJobApplyWithUploadCV,
} from "./apply-handlers";

export default function* authSaga() {
  yield takeLatest(applyJobApply.type, handleApplyJobApply);
  yield takeLatest(
    applyJobApplyWithUploadCV.type,
    handleApplyJobApplyWithUploadCV
  );
}
