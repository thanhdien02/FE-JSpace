import { takeLatest } from "redux-saga/effects";
import {
  authFetchMe,
  authLogin,
  authLogout,
  authRefreshToken,
  authRegister,
} from "./auth-slice";
import {
  handleAuthFetchMe,
  handleAuthLogin,
  handleAuthLogout,
  handleAuthRefrestToken,
  handleAuthRegister,
} from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authFetchMe.type, handleAuthFetchMe);
  yield takeLatest(authLogout.type, handleAuthLogout);
  yield takeLatest(authRefreshToken.type, handleAuthRefrestToken);
}
