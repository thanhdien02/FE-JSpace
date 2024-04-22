import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthGetAllRoles,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
import {
  authUpdateFetchRedux,
  authUpdateLoadingRedux,
  authUpdateRolesRedux,
} from "./auth-slice";
import { commonUpdateOAuthRedux } from "../common/common-slice";
import { getToken, logOut, saveToken } from "../../utils/auth";

function* handleAuthLogin(dataLogin: any): Generator<any> {
  try {
    const response: any = yield call(requestAuthLogin, dataLogin.payload);

    yield put(authUpdateLoadingRedux({ loading: true }));
    if (response?.data?.result?.accessToken === "") {
      const listRole: any = yield call(requestAuthGetAllRoles);

      yield put(authUpdateRolesRedux({ roles: listRole.data?.result }));
      yield put(
        commonUpdateOAuthRedux({ infoUserOauth: { ...dataLogin.payload } })
      );
    } else {
      saveToken(
        response?.data?.result?.accessToken,
        response?.data?.result?.refreshToken
      );
      yield call(handleAuthFetchMe);
    }
  } catch (error) {
  } finally {
    yield put(authUpdateLoadingRedux({ loading: false }));
  }
}
function* handleAuthFetchMe(): Generator<any> {
  try {
    const { accessToken } = getToken();
    const response: any = yield call(requestAuthFetchMe, accessToken);
    if (response?.data?.result) {
      yield put(
        authUpdateFetchRedux({
          accessToken: accessToken,
          user: response.data.result,
        })
      );
    }
  } catch (error) {
  } finally {
  }
}
function* handleAuthLogout(): Generator<any> {
  try {
    logOut();
    yield put(
      authUpdateFetchRedux({
        users: {},
        accessToken: "",
      })
    );
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
      saveToken(
        response?.data?.result?.accessToken,
        response?.data?.result?.refreshToken
      );
      yield call(handleAuthFetchMe);
    }
  } catch (error) {
  } finally {
    yield put(authUpdateLoadingRedux({ loading: false }));
  }
}
export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRegister,
  handleAuthLogout,
};
