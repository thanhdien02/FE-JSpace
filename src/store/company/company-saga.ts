import { takeLatest } from "redux-saga/effects";
import { companyGetCompany, companyGetCompanyById, companyGetFollowedCompany, companyGetRelativeCompany } from "./company-slice";
import {
  handleCompanyGetCompany,
  handleCompanyGetCompanyById,
  handleCompanyGetFollowedCompany,
  handleCompanyGetRelativeCompany,
} from "./company-handlers";

export default function* adminSaga() {
  yield takeLatest(companyGetCompany.type, handleCompanyGetCompany);
  yield takeLatest(companyGetRelativeCompany.type, handleCompanyGetRelativeCompany);
  yield takeLatest(companyGetFollowedCompany.type, handleCompanyGetFollowedCompany);
  yield takeLatest(companyGetCompanyById.type, handleCompanyGetCompanyById);
}
