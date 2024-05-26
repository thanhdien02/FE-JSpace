import { takeLatest } from "redux-saga/effects";
import { fileDeleteFile, fileGetAllFile, fileUploadFile } from "./file-slice";
import {
  handleFileDeleteFile,
  handleFileGetAllFile,
  handleFileUploadFile,
} from "./file-handlers";

export default function* authSaga() {
  yield takeLatest(fileUploadFile.type, handleFileUploadFile);
  yield takeLatest(fileDeleteFile.type, handleFileDeleteFile);
  yield takeLatest(fileGetAllFile.type, handleFileGetAllFile);
}
