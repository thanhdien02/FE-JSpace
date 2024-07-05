import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthLoginWithEmailAndPassword,
  requestAuthRefresh,
  // requestAuthRegister,
  requestAuthRegisterV2,
} from "./auth-requests";
import {
  authUpdateFetchRedux,
  authUpdateLoadingRedux,
  authUpdateMessageRedux,
} from "./auth-slice";
import { getToken, logOut, saveToken } from "../../utils/auth";
import { message } from "antd";

function* handleAuthLogin(dataLogin: any): Generator<any> {
  try {
    const response: any = yield call(requestAuthLogin, dataLogin.payload);
    yield put(authUpdateLoadingRedux({ loading: true }));
    if (response?.data?.result?.accessToken === "") {
      // yield call(handleAuthRegister, { ...dataLogin.payload });
      yield put(authUpdateMessageRedux({ messageAuth: "register" }));
    } else {
      saveToken(
        response?.data?.result?.accessToken,
        response?.data?.result?.refreshToken
      );
      yield call(handleAuthFetchMe);
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(authUpdateLoadingRedux({ loading: false }));
  }
}
function* handleAuthFetchMe(): Generator<any> {
  try {
    const { accessToken } = getToken();
    const response: any = yield call(requestAuthFetchMe, accessToken);
    if (response?.data?.result?.user?.role?.code == "CANDIDATE") {
      yield put(
        authUpdateFetchRedux({
          accessToken: accessToken,
          user: response.data.result.user,
          defaultResume: response.data.result.defaultResume,
          publicProfile: response.data.result.publicProfile,
        })
      );
    } else if (response?.data?.result?.role?.code == "Employee") {
      logOut();
      message.error("Đây là tài khoản Employee.");
    }
  } catch (error: any) {
    // message.error(error?.response?.data?.message);
    if (error?.response?.data?.message == "unauthenticated") {
      yield put(
        authUpdateMessageRedux({ messageAuth: error?.response?.data?.message })
      );
    }
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
function* handleAuthLoginWithEmailPassword(dataLogin: any): Generator<any> {
  try {
    const response: any = yield call(
      requestAuthLoginWithEmailAndPassword,
      dataLogin.payload
    );

    yield put(authUpdateLoadingRedux({ loading: true }));
    if (response?.data?.result?.accessToken === "") {
    } else {
      saveToken(
        response?.data?.result?.accessToken,
        response?.data?.result?.refreshToken
      );
      yield call(handleAuthFetchMe);
    }
  } catch (error: any) {
    logOut();
    message.error("Tên tài khoản hoặc mật khẩu không chính xác");
  } finally {
    yield put(authUpdateLoadingRedux({ loading: false }));
  }
}
function* handleAuthRegister(dataRegister: any): Generator<any> {
  try {
    yield put(authUpdateLoadingRedux({ loading: true }));
    const response: any = yield call(
      requestAuthRegisterV2,
      dataRegister?.payload
    );
    if (response?.result?.accessToken != "") {
      saveToken(
        response?.data?.result?.accessToken,
        response?.data?.result?.refreshToken
      );
      yield call(handleAuthFetchMe);
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(authUpdateLoadingRedux({ loading: false }));
  }
}
// function* handleAuthRegister(dataRegister: any): Generator<any> {
//   try {
//     yield put(authUpdateLoadingRedux({ loading: true }));
//     const response: any = yield call(
//       requestAuthRegister,
//       "CANDIDATE",
//       dataRegister
//     );
//     console.log(response?.result?.accessToken);
//     if (response?.result?.accessToken != "") {
//       saveToken(
//         response?.data?.result?.accessToken,
//         response?.data?.result?.refreshToken
//       );
//       yield call(handleAuthFetchMe);
//     }
//   } catch (error: any) {
//     message.error(error?.response?.data?.message);
//   } finally {
//     yield put(authUpdateLoadingRedux({ loading: false }));
//   }
// }
function* handleAuthRefrestToken(): Generator<any> {
  try {
    const { refreshToken } = getToken();
    const response: any = yield call(requestAuthRefresh, refreshToken);

    if (response?.data?.result) {
      saveToken(response?.data?.result?.accessToken, refreshToken);
      yield call(handleAuthFetchMe);
      yield put(authUpdateMessageRedux({ messageAuth: "" }));
    }
  } catch (error) {
    logOut();
  }
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRegister,
  handleAuthLogout,
  handleAuthRefrestToken,
  handleAuthLoginWithEmailPassword,
};
