import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import {
  jobUpdateAppliedJobRedux,
  jobUpdateAppliedPaginationRedux,
  jobUpdateCompanyJobRedux,
  jobUpdateCompanyPaginationRedux,
  jobUpdateFilterJobRedux,
  jobUpdateFilterPaginationRedux,
  jobUpdateHomeJobRedux,
  jobUpdateInputSearchJobRedux,
  jobUpdateInputSearchLoadingRedux,
  jobUpdateInputSearchPaginationRedux,
  jobUpdateJobByIdRedux,
  jobUpdateJobByIdWithCandidateRedux,
  jobUpdateJobDetailStatusRedux,
  jobUpdateLoadingRedux,
  jobUpdateRelativeJobRedux,
  jobUpdateSavedJobRedux,
  jobUpdateSavedPaginationRedux,
} from "./job-slice";
import { message } from "antd";
import {
  requestJobGetAppliedJob,
  requestJobGetCompanyJob,
  requestJobGetDetailStatus,
  requestJobGetFilterJob,
  requestJobGetHomeJob,
  requestJobGetInputSearchJob,
  requestJobGetJobById,
  requestJobGetJobByIdWithCandidate,
  requestJobGetRelativeJob,
  requestJobGetSavedJob,
} from "./job-requests";

function* handleJobGetHomeJob(dataGetHomeJob: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const response: any = yield call(
      requestJobGetHomeJob,
      dataGetHomeJob?.payload?.candidate_id,
      dataGetHomeJob?.payload?.closeDate,
      dataGetHomeJob?.payload?.page,
      dataGetHomeJob?.payload?.size
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateHomeJobRedux({ homeJobs: response?.data?.result?.content })
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
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
function* handleJobGetCompanyJob(dataGetCompanyJob: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const response: any = yield call(
      requestJobGetCompanyJob,
      dataGetCompanyJob?.payload?.companyName,
      dataGetCompanyJob?.payload?.candidate_id,
      dataGetCompanyJob?.payload?.page,
      dataGetCompanyJob?.payload?.size
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateCompanyJobRedux({
          companyJobs: response?.data?.result?.content,
        })
      );
      yield put(
        jobUpdateCompanyPaginationRedux({
          paginationCompanyJob: {
            pageNumber: response.data.result.pageNumber,
            pageSize: response.data.result.pageSize,
            totalElements: response.data.result.totalElements,
            totalPages: response.data.result.totalPages,
            numberOfElements: response.data.result.numberOfElements,
          },
        })
      );
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
    const response: any = yield call(
      requestJobGetRelativeJob,
      dataGetRelativeJob?.payload?.candidate_id,
      dataGetRelativeJob?.payload?.page,
      dataGetRelativeJob?.payload?.size
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateRelativeJobRedux({
          relativeJobs: response?.data?.result?.content,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
function* handleJobGetInputSearchJob(
  dataGetInputSearchJob: any
): Generator<any> {
  try {
    yield put(
      jobUpdateInputSearchLoadingRedux({ loadingInputSearchJob: true })
    );
    const response: any = yield call(
      requestJobGetInputSearchJob,
      dataGetInputSearchJob?.payload?.candidate_id,
      dataGetInputSearchJob?.payload?.title,
      dataGetInputSearchJob?.payload?.page,
      dataGetInputSearchJob?.payload?.size
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateInputSearchJobRedux({
          inputSearchJobs: response?.data?.result?.content,
        })
      );
      yield put(
        jobUpdateInputSearchPaginationRedux({
          paginationInputSearchJob: {
            pageNumber: response.data.result.pageNumber,
            pageSize: response.data.result.pageSize,
            totalElements: response.data.result.totalElements,
            totalPages: response.data.result.totalPages,
            numberOfElements: response.data.result.numberOfElements,
          },
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(
      jobUpdateInputSearchLoadingRedux({ loadingInputSearchJob: false })
    );
  }
}
function* handleJobGetFilterJob(dataGetFilterJob: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const response: any = yield call(
      requestJobGetFilterJob,
      dataGetFilterJob?.payload?.candidate_id,
      dataGetFilterJob?.payload?.title,
      dataGetFilterJob?.payload?.gender,
      dataGetFilterJob?.payload?.location,
      dataGetFilterJob?.payload?.experience,
      dataGetFilterJob?.payload?.jobType,
      dataGetFilterJob?.payload?.rank,
      dataGetFilterJob?.payload?.minPay,
      dataGetFilterJob?.payload?.maxPay,
      dataGetFilterJob?.payload?.closeDate,
      dataGetFilterJob?.payload?.skills,
      dataGetFilterJob?.payload?.page,
      dataGetFilterJob?.payload?.size
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateFilterJobRedux({
          filterJobs: response?.data?.result?.content,
        })
      );
      yield put(
        jobUpdateFilterPaginationRedux({
          paginationFilterJob: {
            pageNumber: response.data.result.pageNumber,
            pageSize: response.data.result.pageSize,
            totalElements: response.data.result.totalElements,
            totalPages: response.data.result.totalPages,
            numberOfElements: response.data.result.numberOfElements,
          },
        })
      );
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
      // message.success("Load công việc đã lưu thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(jobUpdateLoadingRedux({ loadingJob: false }));
  }
}
function* handleJobGetAppliedJob(dataGetAppliedJob: any): Generator<any> {
  try {
    yield put(jobUpdateLoadingRedux({ loadingJob: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestJobGetAppliedJob,
      dataGetAppliedJob?.payload?.candidate_id,
      dataGetAppliedJob?.payload?.page,
      dataGetAppliedJob?.payload?.size,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateAppliedJobRedux({
          appliedJobs: response?.data?.result?.content,
        })
      );
      yield put(
        jobUpdateAppliedPaginationRedux({
          paginationAppliedJob: {
            pageNumber: response.data.result.pageNumber,
            pageSize: response.data.result.pageSize,
            totalElements: response.data.result.totalElements,
            totalPages: response.data.result.totalPages,
            numberOfElements: response.data.result.numberOfElements,
          },
        })
      );
      // message.success("Load công việc đã lưu thành công.");
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
    const response: any = yield call(
      requestJobGetJobById,
      dataGetJobById?.payload?.job_id
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

    const response: any = yield call(
      requestJobGetJobByIdWithCandidate,
      dataGetJobById?.payload?.candidate_id,
      dataGetJobById?.payload?.job_id
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
function* handleJobGetDetailStatus(dataGetDetailStatus: any): Generator<any> {
  try {
    const token: Token = getToken();
    const response: any = yield call(
      requestJobGetDetailStatus,
      dataGetDetailStatus?.payload?.candidate_id,
      dataGetDetailStatus?.payload?.job_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        jobUpdateJobDetailStatusRedux({
          jobDetailStatus: response.data.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  }
}
export {
  handleJobGetHomeJob,
  handleJobGetSavedJob,
  handleJobGetJobById,
  handleJobGetJobByIdWithCandidate,
  handleJobGetRelativeJob,
  handleJobGetFilterJob,
  handleJobGetAppliedJob,
  handleJobGetCompanyJob,
  handleJobGetInputSearchJob,
  handleJobGetDetailStatus,
};
