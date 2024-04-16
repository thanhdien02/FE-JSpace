import { takeLatest } from "redux-saga/effects";
import { candidateUpdateCandidate } from "./candidate-slice";
import { handleCandidateUpdateIdentification } from "./candidate-handlers";

export default function* authSaga() {
  yield takeLatest(
    candidateUpdateCandidate.type,
    handleCandidateUpdateIdentification
  );
}
