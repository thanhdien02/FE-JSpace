import { takeLatest } from "redux-saga/effects";
import {
  candidateDeleteAvatarCandidate,
  candidateDeleteBackgroundCandidate,
  candidateFollowJob,
  candidateGetSurvey,
  candidateSaveJob,
  candidateSetDefaultResume,
  candidateSurvey,
  candidateUnFollowJob,
  candidateUnSaveJob,
  candidateUpdateAvatar,
  candidateUpdateBackground,
  candidateUpdateCandidate,
  candidateUpdateExperience,
  candidateUpdatePublicResume,
  candidateUpdateStudy,
} from "./candidate-slice";
import {
  handleCandidateDeleteAvatarCandidate,
  handleCandidateDeleteBackgroundCandidate,
  handleCandidateFollowJob,
  handleCandidateGetSurvey,
  handleCandidateSaveJob,
  handleCandidateSetDefaultResume,
  handleCandidateSurvey,
  handleCandidateUnFollowJob,
  handleCandidateUnSaveJob,
  handleCandidateUpdateAvatar,
  handleCandidateUpdateBackground,
  handleCandidateUpdateExperience,
  handleCandidateUpdateIdentification,
  handleCandidateUpdatePublicResume,
  handleCandidateUpdateStudy,
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
  yield takeLatest(
    candidateSetDefaultResume.type,
    handleCandidateSetDefaultResume
  );
  yield takeLatest(
    candidateUpdatePublicResume.type,
    handleCandidateUpdatePublicResume
  );
  yield takeLatest(candidateSurvey.type, handleCandidateSurvey);
  yield takeLatest(candidateGetSurvey.type, handleCandidateGetSurvey);
  yield takeLatest(candidateUpdateStudy.type, handleCandidateUpdateStudy);
  yield takeLatest(
    candidateUpdateExperience.type,
    handleCandidateUpdateExperience
  );
}
