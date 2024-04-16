import { takeLatest } from "redux-saga/effects";
import { authFetchMe, authLogin, authRegister } from "./auth-slice";
import {
  handleAuthFetchMe,
  handleAuthLogin,
  handleAuthRegister,
} from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authFetchMe.type, handleAuthFetchMe);
}
