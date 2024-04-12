import { call, put } from "redux-saga/effects";
import {
  requestAuthGetAllRoles,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
import { authUpdateLoadingRedux, authUpdateRolesRedux } from "./auth-slice";
import { commonUpdateOAuthRedux } from "../common/common-slice";

function* handleAuthLogin(dataLogin: any): Generator<any> {
  try {
    const responsive: any = yield call(requestAuthLogin, dataLogin.payload);
    if (responsive?.data?.result?.accessToken !== "") {
      const listRole: any = yield call(requestAuthGetAllRoles);
      yield put(authUpdateRolesRedux({ roles: listRole.data?.result }));
      yield put(
        commonUpdateOAuthRedux({ infoUserOauth: { ...dataLogin.payload } })
      );
    }
  } catch (error) {}
}
function* handleAuthFetchMe(): Generator<any> {
  try {
  } catch (error) {
  } finally {
  }
}

function* handleAuthRegister(dataRegister: any): Generator<any> {
  try {
    yield put(authUpdateLoadingRedux({ loading: true }));
    const response: any = yield call(
      requestAuthRegister,
      dataRegister?.payload?.role,
      dataRegister?.payload?.userInfo
    );
    console.log(response?.result?.accessToken);
    if (response?.result?.accessToken != "") {
    }
  } catch (error) {
  } finally {
    yield put(authUpdateLoadingRedux({ loading: false }));
  }
}
export { handleAuthLogin, handleAuthFetchMe, handleAuthRegister };
