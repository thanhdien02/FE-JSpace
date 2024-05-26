import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import { jobUpdateHomeJobRedux, jobUpdateLoadingRedux } from "./job-slice";
import { message } from "antd";
import { requestJobGetHomeJob } from "./job-requests";

function* handleJobGetHomeJob(dataGetHomeJob: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const token: Token = getToken();

    const response: any = yield call(
      requestJobGetHomeJob,
      dataGetHomeJob?.payload?.candidate_id,
      dataGetHomeJob?.payload?.page,
      dataGetHomeJob?.payload?.size,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      console.log("🚀 ~ function*handleJobPostJob ~ response:", response);
      yield put(
        jobUpdateHomeJobRedux({ homeJobs: response?.data?.result?.content })
      );
      message.success("Load dữ liệu home job thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
export { handleJobGetHomeJob };
