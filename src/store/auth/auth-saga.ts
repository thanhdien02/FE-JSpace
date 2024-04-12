import { takeLatest } from "redux-saga/effects";
import { authLogin, authRegister } from "./auth-slice";
import { handleAuthLogin, handleAuthRegister } from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRegister.type, handleAuthRegister);
}
