import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import {
  applyUpdateLoadingRedux,
  applyUpdateMessageRedux,
} from "./apply-slice";
import { requestApplyJobApply } from "./apply-requests";
import { message } from "antd";
import { requestFileUploadFile } from "../file/file-requests";

function* handleApplyJobApply(dataApplyJob: any): Generator<any> {
  try {
    yield put(applyUpdateLoadingRedux({ loadingApply: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestApplyJobApply,
      dataApplyJob?.payload?.candidate_id,
      dataApplyJob?.payload?.job_id,
      dataApplyJob?.payload?.resume_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        applyUpdateMessageRedux({
          messageApply: "success" + dataApplyJob?.payload?.job_id,
        })
      );
      message.success("Ứng tuyển thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(applyUpdateLoadingRedux({ loadingApply: false }));
  }
}
function* handleApplyJobApplyWithUploadCV(
  dataApplyJobWithCV: any
): Generator<any> {
  try {
    yield put(applyUpdateLoadingRedux({ loadingApply: true }));

    const formData = new FormData();
    formData.append("file", dataApplyJobWithCV?.payload?.file);
    formData.append("name", dataApplyJobWithCV?.payload?.file?.name);
    const { accessToken } = getToken();
    const responseFile: any = yield call(
      requestFileUploadFile,
      dataApplyJobWithCV?.payload?.candidate_id,
      accessToken,
      formData
    );
    if (responseFile?.data?.code === 1000) {
      const response: any = yield call(
        requestApplyJobApply,
        dataApplyJobWithCV?.payload?.candidate_id,
        dataApplyJobWithCV?.payload?.job_id,
        responseFile?.data?.result?.file?.id,
        accessToken
      );
      if (response?.data?.code === 1000) {
        yield put(
          applyUpdateMessageRedux({
            messageApply: "success" + dataApplyJobWithCV?.payload?.job_id,
          })
        );
        message.success("Ứng tuyển thành công.");
      }
    }
    //
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(applyUpdateLoadingRedux({ loadingApply: false }));
  }
}
export { handleApplyJobApply, handleApplyJobApplyWithUploadCV };
