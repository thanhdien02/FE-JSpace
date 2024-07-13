import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import {
  requestCandidateDeleteAvatar,
  requestCandidateDeleteBackground,
  requestCandidateFollowJob,
  requestCandidateGetSkillPickSuggest,
  requestCandidatePickSkillSuggestJob,
  requestCandidateSaveJob,
  requestCandidateSetDefaultResume,
  requestCandidateUnFollowJob,
  requestCandidateUnSaveJob,
  requestCandidateUpdateAvatar,
  requestCandidateUpdateBackground,
  requestCandidateUpdateIdentification,
  requestCandidateUpdatePublicResume,
} from "./candidate-requests";
import {
  candidateUpdateGetSkillCandidatePickSuggestRedux,
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
function* handleCandidatePickSkillSuggestJob(
  dataCandiatePickSkill: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidatePickSkillSuggestJob,
      dataCandiatePickSkill?.payload?.candidate_id,
      dataCandiatePickSkill?.payload?.skills,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Khảo sát thông tin gợi ý công việc thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: false }));
  }
}
function* handleCandidateGetSkillSuggestJob(
  dataCandidateGetSkillPick: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loadingCandidate: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestCandidateGetSkillPickSuggest,
      dataCandidateGetSkillPick?.payload?.candidate_id,
      token?.accessToken
    );
    console.log("🚀 ~ response:", response);
    if (response?.data?.code === 1000) {
      yield put(
        candidateUpdateGetSkillCandidatePickSuggestRedux({
          skillCandidatePickSuggest: response.data.result,
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
  handleCandidatePickSkillSuggestJob,
  handleCandidateGetSkillSuggestJob,
};
