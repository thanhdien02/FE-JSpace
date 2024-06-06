import { takeLatest } from "redux-saga/effects";
import {
  candidateDeleteAvatarCandidate,
  candidateDeleteBackgroundCandidate,
  candidateFollowJob,
  candidateSaveJob,
  candidateUnFollowJob,
  candidateUnSaveJob,
  candidateUpdateAvatar,
  candidateUpdateBackground,
  candidateUpdateCandidate,
} from "./candidate-slice";
import {
  handleCandidateDeleteAvatarCandidate,
  handleCandidateDeleteBackgroundCandidate,
  handleCandidateFollowJob,
  handleCandidateSaveJob,
  handleCandidateUnFollowJob,
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
  yield takeLatest(
    candidateDeleteAvatarCandidate.type,
    handleCandidateDeleteAvatarCandidate
  );
  yield takeLatest(
    candidateDeleteBackgroundCandidate.type,
    handleCandidateDeleteBackgroundCandidate
  );
  yield takeLatest(candidateFollowJob.type, handleCandidateFollowJob);
  yield takeLatest(candidateUnFollowJob.type, handleCandidateUnFollowJob);
}
