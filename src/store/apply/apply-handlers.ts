import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import { applyUpdateLoadingRedux } from "./apply-slice";
import { requestApplyJobApply } from "./apply-requests";
import { message } from "antd";

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
      message.success("Ứng tuyển thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(applyUpdateLoadingRedux({ loadingApply: false }));
  }
}
export { handleApplyJobApply };
