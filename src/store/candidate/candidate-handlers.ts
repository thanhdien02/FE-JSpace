import { call, put } from "redux-saga/effects";
import { getToken } from "../../utils/auth";
import { requestCandidateUpdateIdentification } from "./candidate-requests";
import {
  candidateUpdateLoadingRedux,
  candidateUpdateMessageRedux,
} from "./candidate-slice";

function* handleCandidateUpdateIdentification(
  dataCandidatUpdate: any
): Generator<any> {
  try {
    yield put(candidateUpdateLoadingRedux({ loading: true }));
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
    }
  } catch (error) {
  } finally {
    yield put(candidateUpdateLoadingRedux({ loading: false }));
  }
}
export { handleCandidateUpdateIdentification };
