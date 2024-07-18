import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import {
  requestCandidateDeleteAvatar,
  requestCandidateDeleteBackground,
  requestCandidateFollowJob,
  requestCandidateGetSurvey,
  requestCandidateSaveJob,
  requestCandidateSetDefaultResume,
  requestCandidateSurvey,
  requestCandidateUnFollowJob,
  requestCandidateUnSaveJob,
  requestCandidateUpdateAvatar,
  requestCandidateUpdateBackground,
  requestCandidateUpdateExperience,
  requestCandidateUpdateIdentification,
  requestCandidateUpdatePublicResume,
  requestCandidateUpdateStudy,
} from "./candidate-requests";
import {
  candidateUpdateInformationSurveyRedux,
  candidateUpdateLoadingRedux,
  candidateUpdateMessageRedux,
} from "./candidate-slice";
import { handleAuthFetchMe } from "../auth/auth-handlers";
import { message } from "antd";
import { authUpdateSetDefaultResumeRedux } from "../auth/auth-slice";

function* handleCandidateUpdateIdentification(
  dataCandidatUpdate: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const { accessToken } = getToken();
    const response: any = yield call(
      requestCandidateUpdateIdentification,
      dataCandidatUpdate?.payload?.id,
      accessToken,
      dataCandidatUpdate?.payload
    );
    if (response?.data?.code === 1000) {
      yield put(
        candidateUpdateMessageRedux({
          messageCandidate: "success",
        })
      );
      yield call(handleAuthFetchMe);
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}

function* handleCandidateUpdateBackground(
  dataBackgroundCandidate: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const formData = new FormData();
    formData.append(
      "file",
      dataBackgroundCandidate?.payload?.file?.originFileObj
    );
    const response: any = yield call(
      requestCandidateUpdateBackground,
      formData,
      dataBackgroundCandidate?.payload?.candidate_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Cập nhật background thành công.");
      yield call(handleAuthFetchMe);
    } else {
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateUpdateAvatar(
  dataAvatarCandidate: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const formData = new FormData();
    formData.append("file", dataAvatarCandidate?.payload?.file?.originFileObj);
    const response: any = yield call(
      requestCandidateUpdateAvatar,
      formData,
      dataAvatarCandidate?.payload?.candidate_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Cập nhật background thành công.");
      yield call(handleAuthFetchMe);
    } else {
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateSaveJob(dataCandiateSaveJob: any): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateSaveJob,
      dataCandiateSaveJob?.payload?.candidate_id,
      dataCandiateSaveJob?.payload?.post_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Lưu tin thành công.");
      yield put(
        candidateUpdateMessageRedux({
          messageCandidate:
            `savesuccess` + dataCandiateSaveJob?.payload?.post_id,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateUnSaveJob(dataCandiateSaveJob: any): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateUnSaveJob,
      dataCandiateSaveJob?.payload?.candidate_id,
      dataCandiateSaveJob?.payload?.post_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Loại bỏ lưu thành công.");
      yield put(
        candidateUpdateMessageRedux({
          messageCandidate:
            `unsavesuccess` + dataCandiateSaveJob?.payload?.post_id,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateDeleteAvatarCandidate(
  dataUpdateAvatarEmployer: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateDeleteAvatar,
      dataUpdateAvatarEmployer?.payload?.avatar_id,
      dataUpdateAvatarEmployer?.payload?.candidate_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Xóa avatar thành công.");
      yield call(handleAuthFetchMe);
    } else {
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateDeleteBackgroundCandidate(
  dataUpdateBackgroundEmployer: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateDeleteBackground,
      dataUpdateBackgroundEmployer?.payload?.background_id,
      dataUpdateBackgroundEmployer?.payload?.candidate_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Xóa background thành công.");
      yield call(handleAuthFetchMe);
    } else {
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}

function* handleCandidateFollowJob(dataCandiateFollowJob: any): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateFollowJob,
      dataCandiateFollowJob?.payload?.candidate_id,
      dataCandiateFollowJob?.payload?.company_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Theo dõi công ty thành công.");
      yield put(
        candidateUpdateMessageRedux({
          messageCandidate:
            `followsuccess` + dataCandiateFollowJob?.payload?.company_id,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateUnFollowJob(
  dataCandiateFollowJob: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateUnFollowJob,
      dataCandiateFollowJob?.payload?.candidate_id,
      dataCandiateFollowJob?.payload?.company_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Bỏ theo dõi thành công.");
      yield put(
        candidateUpdateMessageRedux({
          messageCandidate:
            `unfollowsuccess` + dataCandiateFollowJob?.payload?.company_id,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateSetDefaultResume(
  dataCandiateSetDefaultResume: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateSetDefaultResume,
      dataCandiateSetDefaultResume?.payload?.candidate_id,
      dataCandiateSetDefaultResume?.payload?.resume_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Đặt CV chính thành công.");
      yield put(
        authUpdateSetDefaultResumeRedux({
          defaultResume: response.data.result.defaultResume,
          publicProfile: response.data.result.publicProfile,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateUpdatePublicResume(
  dataCandiateSetDefaultResume: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateUpdatePublicResume,
      dataCandiateSetDefaultResume?.payload?.candidate_id,
      dataCandiateSetDefaultResume?.payload?.publicProfile,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Cập nhật hiển thị CV thành công.");
      yield put(
        authUpdateSetDefaultResumeRedux({
          defaultResume: response.data.result.defaultResume,
          publicProfile: response.data.result.publicProfile,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateUpdateStudy(dataCandiateStudy: any): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateUpdateStudy,
      dataCandiateStudy?.payload?.candidateId,
      dataCandiateStudy?.payload?.dataUpdateStudy,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        candidateUpdateMessageRedux({ messageCandidate: "studysuccess" })
      );
      message.success("Cập nhật học vấn thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateUpdateExperience(
  dataCandiateExperience: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateUpdateExperience,
      dataCandiateExperience?.payload?.candidateId,
      dataCandiateExperience?.payload?.dataUpdateExperience,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        candidateUpdateMessageRedux({ messageCandidate: "experiencesuccess" })
      );
      message.success("Cập nhật kinh nghiệm thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateSurvey(dataCandiateSurvey: any): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateSurvey,
      dataCandiateSurvey?.payload,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield call(handleAuthFetchMe);
      yield put(
        candidateUpdateMessageRedux({ messageCandidate: "surveysuccess" })
      );
      message.success("Khảo sát thông tin thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateGetSurvey(dataCandidateSurvey: any): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateGetSurvey,
      dataCandidateSurvey?.payload?.candidate_id,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        candidateUpdateInformationSurveyRedux({
          informationSurvey: response.data.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
export {
  handleCandidateUpdateIdentification,
  handleCandidateUpdateBackground,
  handleCandidateUpdateAvatar,
  handleCandidateSaveJob,
  handleCandidateUnSaveJob,
  handleCandidateDeleteAvatarCandidate,
  handleCandidateDeleteBackgroundCandidate,
  handleCandidateFollowJob,
  handleCandidateUnFollowJob,
  handleCandidateSetDefaultResume,
  handleCandidateUpdatePublicResume,
  handleCandidateSurvey,
  handleCandidateGetSurvey,
  handleCandidateUpdateStudy,
  handleCandidateUpdateExperience,
};
