import { takeLatest } from "redux-saga/effects";
import {
  candidateUpdateAvatar,
  candidateUpdateBackground,
  candidateUpdateCandidate,
} from "./candidate-slice";
import {
  handleCandidateUpdateAvatar,
  handleCandidateUpdateBackground,
  handleCandidateUpdateIdentification,
} from "./candidate-handlers";

export default function* authSaga() {
  yield takeLatest(
    candidateUpdateCandidate.type,
    handleCandidateUpdateIdentification
  );
  yield takeLatest(
    candidateUpdateBackground.type,
    handleCandidateUpdateBackground
  );
  yield takeLatest(candidateUpdateAvatar.type, handleCandidateUpdateAvatar);
}
