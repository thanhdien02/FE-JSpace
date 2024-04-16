import { takeLatest } from "redux-saga/effects";
import { fileUploadFile } from "./file-slice";
import { handleFileUploadFile } from "./file-handlers";

export default function* authSaga() {
  yield takeLatest(fileUploadFile.type, handleFileUploadFile);
}
