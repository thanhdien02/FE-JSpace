import { call, put } from "redux-saga/effects";
import { getToken } from "../../utils/auth";
import {
  fileUpdateFileRedux,
  fileUpdateLoadingRedux,
  fileUpdateMessageRedux,
} from "./file-slice";
import {
  requestFileDeleteFile,
  requestFileGetAllFile,
  requestFileUploadFile,
} from "./file-requests";
import { message } from "antd";

function* handleFileUploadFile(dataUploadFile: any): Generator<any> {
  try {
    yield put(fileUpdateLoadingRedux({ loadingFile: true }));
    const formData = new FormData();
    formData.append("file", dataUploadFile?.payload?.file);
    formData.append("name", dataUploadFile?.payload?.file?.name);
    const { accessToken } = getToken();
    const response: any = yield call(
      requestFileUploadFile,
      dataUploadFile?.payload?.candidate_id,
      accessToken,
      formData
    );
    if (response?.data?.code === 1000) {
      message.success("Tải CV lên thành công !");
      yield put(
        fileUpdateMessageRedux({
          messageFile: "success",
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(fileUpdateLoadingRedux({ loadingFile: false }));
  }
}
function* handleFileApplyJobFile(dataUploadFile: any): Generator<any> {
  try {
    yield put(fileUpdateLoadingRedux({ loadingFile: true }));
    const formData = new FormData();
    formData.append("file", dataUploadFile?.payload?.file);
    formData.append("name", dataUploadFile?.payload?.file?.name);
    const { accessToken } = getToken();
    const response: any = yield call(
      requestFileUploadFile,
      dataUploadFile?.payload?.candidate_id,
      accessToken,
      formData
    );
    if (response?.data?.code === 1000) {
      message.success("Tải CV lên thành công !");
      yield put(
        fileUpdateMessageRedux({
          messageFile: "success",
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(fileUpdateLoadingRedux({ loadingFile: false }));
  }
}

function* handleFileDeleteFile(dataDeleteFile: any): Generator<any> {
  try {
    yield put(fileUpdateLoadingRedux({ loadingFile: true }));
    const { accessToken } = getToken();
    const response: any = yield call(
      requestFileDeleteFile,
      dataDeleteFile?.payload?.candidate_id,
      accessToken,
      dataDeleteFile?.payload?.resume_id
    );
    if (response?.data?.code === 1000) {
      message.success("Xóa hồ sơ thành công");
      yield call(handleFileGetAllFile, {
        payload: {
          candidate_id: dataDeleteFile?.payload?.candidate_id,
        },
      });
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(fileUpdateLoadingRedux({ loadingFile: false }));
  }
}
function* handleFileGetAllFile(dataCandadate_id: any): Generator<any> {
  try {
    yield put(fileUpdateLoadingRedux({ loadingFile: true }));
    const { accessToken } = getToken();
    const response: any = yield call(
      requestFileGetAllFile,
      dataCandadate_id?.payload?.candidate_id,
      accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        fileUpdateMessageRedux({
          messageFile: "success",
        })
      );
      yield put(
        fileUpdateFileRedux({
          files: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    if (error?.response?.data?.code !== 500) {
      message.error(error?.response?.data?.message);
    }
  } finally {
    yield put(fileUpdateLoadingRedux({ loadingFile: false }));
  }
}
export {
  handleFileUploadFile,
  handleFileGetAllFile,
  handleFileDeleteFile,
  handleFileApplyJobFile,
};
