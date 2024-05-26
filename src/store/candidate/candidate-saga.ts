import { takeLatest } from "redux-saga/effects";
import {
  candidateSaveJob,
  candidateUnSaveJob,
  candidateUpdateAvatar,
  candidateUpdateBackground,
  candidateUpdateCandidate,
} from "./candidate-slice";
import {
  handleCandidateSaveJob,
  handleCandidateUnSaveJob,
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
  yield takeLatest(candidateSaveJob.type, handleCandidateSaveJob);
  yield takeLatest(candidateUnSaveJob.type, handleCandidateUnSaveJob);
}
