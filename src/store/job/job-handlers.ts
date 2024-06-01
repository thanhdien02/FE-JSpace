import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import {
  jobUpdateHomeJobRedux,
  jobUpdateJobByIdRedux,
  jobUpdateJobByIdWithCandidateRedux,
  jobUpdateLoadingRedux,
  jobUpdateRelativeJobRedux,
  jobUpdateSavedJobRedux,
  jobUpdateSavedPaginationRedux,
} from "./job-slice";
import { message } from "antd";
import {
  requestJobGetHomeJob,
  requestJobGetJobById,
  requestJobGetJobByIdWithCandidate,
  requestJobGetRelativeJob,
  requestJobGetSavedJob,
} from "./job-requests";

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
      yield put(
        jobUpdateHomeJobRedux({ homeJobs: response?.data?.result?.content })
      );
      // message.success("Load dữ liệu home job thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
function* handleJobGetRelativeJob(dataGetRelativeJob: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestJobGetRelativeJob,
      dataGetRelativeJob?.payload?.candidate_id,
      dataGetRelativeJob?.payload?.page,
      dataGetRelativeJob?.payload?.size,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateRelativeJobRedux({
          relativeJobs: response?.data?.result?.content,
        })
      );
      // message.success("Load dữ liệu relative job thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
function* handleJobGetSavedJob(dataGetSavedJob: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestJobGetSavedJob,
      dataGetSavedJob?.payload?.candidate_id,
      dataGetSavedJob?.payload?.page,
      dataGetSavedJob?.payload?.size,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateSavedJobRedux({ savedJobs: response?.data?.result?.content })
      );
      yield put(
        jobUpdateSavedPaginationRedux({
          paginationSavedJob: {
            pageNumber: response.data.result.pageNumber,
            pageSize: response.data.result.pageSize,
            totalElements: response.data.result.totalElements,
            totalPages: response.data.result.totalPages,
            numberOfElements: response.data.result.numberOfElements,
          },
        })
      );
      message.success("Load công việc đã lưu thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
function* handleJobGetJobById(dataGetJobById: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const token: Token = getToken();

    const response: any = yield call(
      requestJobGetJobById,
      dataGetJobById?.payload?.job_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateJobByIdRedux({
          jobById: response.data.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
function* handleJobGetJobByIdWithCandidate(
  dataGetJobById: any
): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const token: Token = getToken();

    const response: any = yield call(
      requestJobGetJobByIdWithCandidate,
      dataGetJobById?.payload?.candidate_id,
      dataGetJobById?.payload?.job_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateJobByIdWithCandidateRedux({
          jobByIdWithCandidate: response.data.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
export {
  handleJobGetHomeJob,
  handleJobGetSavedJob,
  handleJobGetJobById,
  handleJobGetJobByIdWithCandidate,
  handleJobGetRelativeJob,
};
